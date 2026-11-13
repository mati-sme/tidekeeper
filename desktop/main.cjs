// Electron wrapper: runs Tidekeeper as a native macOS app.
const { app, BrowserWindow, shell, Menu } = require('electron');
const path = require('path');
function createWindow() {
  const win = new BrowserWindow({ width: 1440, height: 900, minWidth: 1100, minHeight: 680, backgroundColor: '#03121b', title: 'Tidekeeper',
    titleBarStyle: 'hiddenInset', trafficLightPosition: { x: 16, y: 22 }, webPreferences: { backgroundThrottling: false, contextIsolation: true } });
  win.loadFile(path.join(__dirname, '..', 'docs', 'index.html'));
  win.webContents.setWindowOpenHandler(({ url }) => { shell.openExternal(url); return { action: 'deny' }; });
}
app.whenReady().then(() => {
  if (process.platform === 'darwin') Menu.setApplicationMenu(Menu.buildFromTemplate([{ role: 'appMenu' }, { role: 'editMenu' }, { role: 'viewMenu' }, { role: 'windowMenu' }]));
  createWindow(); app.on('activate', () => { if (BrowserWindow.getAllWindows().length === 0) createWindow(); });
});
app.on('window-all-closed', () => app.quit());
