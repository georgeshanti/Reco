const {app, BrowserWindow} = require('electron');
const url = require('url');
const path = require('path');

let win;

function createWindow() { 
   win = new BrowserWindow({webPreferences: {webSecurity: false}});
   win.loadURL("https://www.google.com/"); 
}  

app.on('ready', createWindow) 