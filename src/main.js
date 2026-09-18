// ============================================
// LOUV OS — Main Application
// Windows XP Desktop Simulation
// ============================================

import { clients, services } from './data/clients.js';
import './style.css';

// ============================================
// STATE
// ============================================
let windowZIndex = 100;
let openWindows = {};
let selectedIcon = null;
let isDragging = false;
let dragWindow = null;
let dragOffset = { x: 0, y: 0 };
let contextMenu = null;

// ============================================
// BOOT SEQUENCE
// ============================================
function initBoot() {
  const bootScreen = document.getElementById('boot-screen');
  const desktop = document.getElementById('desktop');

  setTimeout(() => {
    bootScreen.classList.add('fade-out');
    desktop.classList.add('visible');
    setTimeout(() => {
      bootScreen.style.display = 'none';
    }, 800);
  }, 2500);
}

// ============================================
// CLOCK
// ============================================
function updateClock() {
  const clock = document.getElementById('clock');
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  clock.textContent = `${hours}:${minutes}`;
}

// ============================================
// DESKTOP ICONS
// ============================================
function renderDesktopIcons() {
  const container = document.getElementById('desktop-icons');
  container.innerHTML = '';

  clients.forEach((client) => {
    const iconEl = document.createElement('div');
    iconEl.className = 'desktop-icon';
    iconEl.dataset.id = client.id;

    const iconImage = document.createElement('div');
    iconImage.className = 'icon-image';

    if (client.iconType === 'image' && client.iconSrc) {
      const img = document.createElement('img');
      img.src = client.iconSrc;
      img.alt = client.name;
      img.draggable = false;
      iconImage.appendChild(img);
    } else {
      iconImage.textContent = client.icon;
    }

    const label = document.createElement('div');
    label.className = 'icon-label';
    label.textContent = client.name;

    iconEl.appendChild(iconImage);
    iconEl.appendChild(label);

    // Single click = select
    iconEl.addEventListener('click', (e) => {
      e.stopPropagation();
      selectIcon(iconEl);
    });

    // Double click = open
    iconEl.addEventListener('dblclick', (e) => {
      e.stopPropagation();
      handleIconOpen(client);
    });

    container.appendChild(iconEl);
  });
}

function selectIcon(iconEl) {
  document.querySelectorAll('.desktop-icon.selected').forEach(el => {
    el.classList.remove('selected');
  });
  iconEl.classList.add('selected');
  selectedIcon = iconEl.dataset.id;
}

function handleIconOpen(client) {
  if (client.isSpecial) {
    if (client.action === 'about') {
      openAboutWindow();
    } else if (client.action === 'recycle') {
      return;
    } else if (client.id === 'ie-browser') {
      openAboutWindow();
    }
    return;
  }

  openClientWindow(client);
}

// ============================================
// WINDOWS
// ============================================
function createWindow(id, title, icon, content, options = {}) {
  if (openWindows[id]) {
    focusWindow(openWindows[id].element);
    return openWindows[id].element;
  }

  const container = document.getElementById('windows-container');
  const win = document.createElement('div');
  win.className = 'xp-window';
  win.dataset.windowId = id;

  const offsetCount = Object.keys(openWindows).length;
  const left = 80 + (offsetCount * 30);
  const top = 40 + (offsetCount * 30);
  win.style.left = `${left}px`;
  win.style.top = `${top}px`;
  win.style.width = options.width || '500px';
  win.style.height = options.height || '420px';
  win.style.zIndex = ++windowZIndex;

  const titlebar = document.createElement('div');
  titlebar.className = 'window-titlebar';
  titlebar.innerHTML = `
    <span class="window-titlebar-icon">${icon}</span>
    <span class="window-titlebar-text">${title}</span>
    <div class="window-controls">
      <button class="window-btn window-btn-minimize" title="Minimize">_</button>
      <button class="window-btn window-btn-maximize" title="Maximize">□</button>
      <button class="window-btn window-btn-close" title="Close">✕</button>
    </div>
  `;

  const body = document.createElement('div');
  body.className = 'window-body';
  body.innerHTML = content;

  win.appendChild(titlebar);

  if (options.toolbar) {
    const toolbar = document.createElement('div');
    toolbar.className = 'window-toolbar';
    toolbar.innerHTML = options.toolbar;
    win.appendChild(toolbar);
  }

  win.appendChild(body);
  container.appendChild(win);

  const closeBtn = titlebar.querySelector('.window-btn-close');
  const minBtn = titlebar.querySelector('.window-btn-minimize');
  const maxBtn = titlebar.querySelector('.window-btn-maximize');

  closeBtn.addEventListener('click', () => closeWindow(id));
  minBtn.addEventListener('click', () => minimizeWindow(id));
  maxBtn.addEventListener('click', () => toggleMaximize(win));

  titlebar.addEventListener('mousedown', (e) => {
    if (e.target.closest('.window-btn')) return;
    isDragging = true;
    dragWindow = win;
    dragOffset.x = e.clientX - win.offsetLeft;
    dragOffset.y = e.clientY - win.offsetTop;
    focusWindow(win);
  });

  win.addEventListener('mousedown', () => focusWindow(win));

  openWindows[id] = {
    element: win,
    title,
    icon,
    minimized: false,
  };

  addTaskbarItem(id, title, icon);
  return win;
}

function focusWindow(win) {
  document.querySelectorAll('.xp-window').forEach(w => {
    w.classList.add('inactive');
  });
  win.classList.remove('inactive');
  win.style.zIndex = ++windowZIndex;

  document.querySelectorAll('.taskbar-item').forEach(item => {
    item.classList.remove('active');
  });
  const taskbarItem = document.querySelector(`.taskbar-item[data-window-id="${win.dataset.windowId}"]`);
  if (taskbarItem) taskbarItem.classList.add('active');
}

function closeWindow(id) {
  const winData = openWindows[id];
  if (!winData) return;

  const win = winData.element;
  win.classList.add('closing');

  setTimeout(() => {
    win.remove();
    delete openWindows[id];
    removeTaskbarItem(id);
  }, 150);
}

function minimizeWindow(id) {
  const winData = openWindows[id];
  if (!winData) return;
  winData.element.style.display = 'none';
  winData.minimized = true;
}

function restoreWindow(id) {
  const winData = openWindows[id];
  if (!winData) return;
  winData.element.style.display = 'flex';
  winData.minimized = false;
  focusWindow(winData.element);
}

function toggleMaximize(win) {
  if (win.dataset.maximized === 'true') {
    win.style.left = win.dataset.prevLeft;
    win.style.top = win.dataset.prevTop;
    win.style.width = win.dataset.prevWidth;
    win.style.height = win.dataset.prevHeight;
    win.dataset.maximized = 'false';
  } else {
    win.dataset.prevLeft = win.style.left;
    win.dataset.prevTop = win.style.top;
    win.dataset.prevWidth = win.style.width;
    win.dataset.prevHeight = win.style.height;
    win.style.left = '0';
    win.style.top = '0';
    win.style.width = '100%';
    win.style.height = 'calc(100% - 36px)';
    win.dataset.maximized = 'true';
  }
}

// ============================================
// TASKBAR
// ============================================
function addTaskbarItem(id, title, icon) {
  const container = document.getElementById('taskbar-items');
  const item = document.createElement('div');
  item.className = 'taskbar-item active';
  item.dataset.windowId = id;
  item.innerHTML = `
    <span class="taskbar-icon">${icon}</span>
    <span>${title}</span>
  `;

  item.addEventListener('click', () => {
    const winData = openWindows[id];
    if (!winData) return;
    if (winData.minimized) {
      restoreWindow(id);
    } else if (winData.element.classList.contains('inactive')) {
      focusWindow(winData.element);
    } else {
      minimizeWindow(id);
    }
  });

  document.querySelectorAll('.taskbar-item').forEach(ti => ti.classList.remove('active'));
  container.appendChild(item);
}

function removeTaskbarItem(id) {
  const item = document.querySelector(`.taskbar-item[data-window-id="${id}"]`);
  if (item) item.remove();
}

// ============================================
// CLIENT WINDOW
// ============================================
function openClientWindow(client) {
  const serviceTags = client.services.map(s => 
    `<span class="service-tag">${s}</span>`
  ).join('');

  const iconHtml = client.iconType === 'image' && client.iconSrc
    ? `<img src="${client.iconSrc}" alt="${client.name}">`
    : client.icon;

  const content = `
    <div class="client-content">
      <div class="client-logo">${iconHtml}</div>
      <h2 class="client-name">${client.name}</h2>
      <p class="client-description">${client.description}</p>
      <div class="client-services">${serviceTags}</div>
      ${client.url ? `<a href="${client.url}" target="_blank" rel="noopener" class="client-link">
        🌐 Visit Website →
      </a>` : ''}
    </div>
  `;

  const toolbar = `
    <div class="window-address-bar">
      <span class="address-icon">📄</span>
      <span class="address-text">${client.url || 'file:///C:/Clients/' + client.name}</span>
      ${client.url ? `<a href="${client.url}" target="_blank" class="address-go">→</a>` : ''}
    </div>
  `;

  createWindow(client.id, client.name, client.icon, content, {
    toolbar,
    width: '520px',
    height: '460px',
  });
}

// ============================================
// SERVICE WINDOW
// ============================================
function openServiceWindow(serviceKey) {
  const service = services[serviceKey];
  if (!service) return;

  const featuresList = service.features.map(f => `<li>${f}</li>`).join('');

  const content = `
    <div class="service-content">
      <h2>${service.title}</h2>
      <p>${service.description}</p>
      <ul>${featuresList}</ul>
    </div>
  `;

  createWindow(`service-${serviceKey}`, service.title, '⚙️', content, {
    width: '480px',
    height: '400px',
  });
}

// ============================================
// ABOUT WINDOW
// ============================================
function openAboutWindow() {
  const content = `
    <div class="about-content">
      <img src="/louv-logo.jpg" alt="LOUV" style="width:80px;height:80px;object-fit:contain;border-radius:16px;margin-bottom:8px;">
      <h2>LOUV</h2>
      <p class="about-sub">Creative Digital Agency</p>
      <p>We transform ideas into unique digital experiences. From web design to full online brand management.</p>
      <div class="about-services-grid">
        <div class="about-service-card">
          <div class="card-icon">🌐</div>
          <div class="card-title">Web Design</div>
        </div>
        <div class="about-service-card">
          <div class="card-icon">💻</div>
          <div class="card-title">Software</div>
        </div>
        <div class="about-service-card">
          <div class="card-icon">📢</div>
          <div class="card-title">Ads</div>
        </div>
        <div class="about-service-card">
          <div class="card-icon">🎨</div>
          <div class="card-title">Branding</div>
        </div>
        <div class="about-service-card">
          <div class="card-icon">📱</div>
          <div class="card-title">Social</div>
        </div>
        <div class="about-service-card" style="cursor:pointer;" onclick="window.open('https://github.com/looterstudio','_blank')">
          <img src="/looterstudio-logo.png" alt="LooterStudio" style="width:32px;height:32px;object-fit:contain;margin-bottom:4px;">
          <div class="card-title">LooterStudio®</div>
        </div>
      </div>
      <p style="font-size:11px;color:#aaa;margin-top:16px;">always early, never wrong.</p>
    </div>
  `;

  createWindow('about', 'About LOUV', '🖥️', content, {
    width: '520px',
    height: '480px',
  });
}

// ============================================
// CONTACT WINDOW
// ============================================
function openContactWindow() {
  const content = `
    <div class="contact-content">
      <h2>✉️ Contact</h2>
      <p style="color: #666; margin-bottom: 24px;">Got a project in mind? Let's talk.</p>
      <div class="contact-links">
        <a href="mailto:hello@louv.agency" class="contact-link-item">
          <span>📧</span> hello@louv.agency
        </a>
        <a href="https://instagram.com/louv.agency" target="_blank" class="contact-link-item">
          <span>📸</span> @louv.agency
        </a>
        <a href="https://wa.me/5491100000000" target="_blank" class="contact-link-item">
          <span>💬</span> WhatsApp
        </a>
        <a href="https://github.com/looterstudio" target="_blank" class="contact-link-item">
          <span>🐙</span> GitHub — LooterStudio®
        </a>
      </div>
    </div>
  `;

  createWindow('contact', 'Contact', '✉️', content, {
    width: '440px',
    height: '400px',
  });
}

// ============================================
// START MENU
// ============================================
function initStartMenu() {
  const startBtn = document.getElementById('start-button');
  const startMenu = document.getElementById('start-menu');

  startBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    startMenu.classList.toggle('hidden');
  });

  startMenu.querySelectorAll('.start-menu-item[data-service]').forEach(item => {
    item.addEventListener('click', () => {
      const serviceKey = item.dataset.service;
      openServiceWindow(serviceKey);
      startMenu.classList.add('hidden');
    });
  });

  startMenu.querySelectorAll('.start-menu-item[data-action]').forEach(item => {
    item.addEventListener('click', () => {
      const action = item.dataset.action;
      if (action === 'about') openAboutWindow();
      if (action === 'contact') openContactWindow();
      startMenu.classList.add('hidden');
    });
  });

  startMenu.querySelectorAll('.start-menu-item-right[data-action]').forEach(item => {
    item.addEventListener('click', () => {
      const action = item.dataset.action;
      if (action === 'portfolio') openAboutWindow();
      if (action === 'services') openServiceWindow('web');
      if (action === 'looter') window.open('https://github.com/looterstudio', '_blank');
      if (action === 'shutdown') {
        document.getElementById('desktop').classList.remove('visible');
        setTimeout(() => {
          document.body.style.background = '#000';
        }, 600);
      }
      startMenu.classList.add('hidden');
    });
  });
}

// ============================================
// CONTEXT MENU (Right Click)
// ============================================
function showContextMenu(e) {
  e.preventDefault();
  removeContextMenu();

  const menu = document.createElement('div');
  menu.className = 'context-menu';
  menu.style.left = `${e.clientX}px`;
  menu.style.top = `${e.clientY}px`;

  const items = [
    { label: 'View → Large Icons', action: () => {} },
    { label: 'Sort by → Name', action: () => {} },
    { separator: true },
    { label: 'Refresh', action: () => location.reload() },
    { separator: true },
    { label: 'New → Folder', action: () => {} },
    { separator: true },
    { label: 'Properties', action: () => openAboutWindow() },
  ];

  items.forEach(item => {
    if (item.separator) {
      const sep = document.createElement('div');
      sep.className = 'context-menu-separator';
      menu.appendChild(sep);
    } else {
      const menuItem = document.createElement('div');
      menuItem.className = 'context-menu-item';
      menuItem.textContent = item.label;
      menuItem.addEventListener('click', () => {
        item.action();
        removeContextMenu();
      });
      menu.appendChild(menuItem);
    }
  });

  document.body.appendChild(menu);
  contextMenu = menu;

  const rect = menu.getBoundingClientRect();
  if (rect.right > window.innerWidth) {
    menu.style.left = `${window.innerWidth - rect.width - 5}px`;
  }
  if (rect.bottom > window.innerHeight) {
    menu.style.top = `${window.innerHeight - rect.height - 5}px`;
  }
}

function removeContextMenu() {
  if (contextMenu) {
    contextMenu.remove();
    contextMenu = null;
  }
}

// ============================================
// GLOBAL EVENT LISTENERS
// ============================================
function initEvents() {
  document.addEventListener('mousemove', (e) => {
    if (isDragging && dragWindow) {
      const x = e.clientX - dragOffset.x;
      const y = e.clientY - dragOffset.y;
      dragWindow.style.left = `${Math.max(0, x)}px`;
      dragWindow.style.top = `${Math.max(0, y)}px`;
      dragWindow.dataset.maximized = 'false';
    }
  });

  document.addEventListener('mouseup', () => {
    isDragging = false;
    dragWindow = null;
  });

  document.getElementById('desktop').addEventListener('click', (e) => {
    if (e.target.id === 'desktop' || e.target.id === 'desktop-icons') {
      document.querySelectorAll('.desktop-icon.selected').forEach(el => {
        el.classList.remove('selected');
      });
      selectedIcon = null;
      document.getElementById('start-menu').classList.add('hidden');
    }
    removeContextMenu();
  });

  document.getElementById('desktop-icons').addEventListener('contextmenu', showContextMenu);

  document.addEventListener('click', (e) => {
    const startMenu = document.getElementById('start-menu');
    const startBtn = document.getElementById('start-button');
    if (!startMenu.contains(e.target) && !startBtn.contains(e.target)) {
      startMenu.classList.add('hidden');
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      removeContextMenu();
      document.getElementById('start-menu').classList.add('hidden');
    }
    if (e.key === 'Enter' && selectedIcon) {
      const client = clients.find(c => c.id === selectedIcon);
      if (client) handleIconOpen(client);
    }
  });
}

// ============================================
// INIT
// ============================================
function init() {
  initBoot();
  renderDesktopIcons();
  initStartMenu();
  initEvents();
  updateClock();
  setInterval(updateClock, 1000);
}

document.addEventListener('DOMContentLoaded', init);
