const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow () {
  const win = new BrowserWindow({
    width: 320,
    height: 360,

    icon: path.join(process.resourcesPath, 'app.ico'),   // ★ アイコンを指定
    
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
       webSecurity: false          // ← file:// でも XHR を許可
    }
  });

  win.loadFile('clock.html');
}

app.whenReady().then(createWindow);
