const {app, BrowserWindow} = require('electron');
const url = require('url');
const path = require('path');

const utils = require('./utils');

let win;

function createWindow() { 
   win = new BrowserWindow({webPreferences: {webSecurity: false}});
   utils.registerListeners();
   win.loadURL("http://localhost:3000/"); 
}  

app.on('ready', createWindow) 