require('module-alias/register');

import * as Electron from 'electron';

import { Listeners } from '@utils/listeners';

class Office{

    window:Electron.BrowserWindow;
    url:string;
    listeners:Listeners;

    constructor(_url:string){
        this.url = _url;
    }

    createWindow = () => () => {
        this.window = new Electron.BrowserWindow({webPreferences: {webSecurity: false}});
        this.listeners = new Listeners(this);
        this.listeners.registerListeners();
        this.window.loadURL(this.url);
    }

    start():void{
        Electron.app.on('ready',this.createWindow());
    }
}
export { Office };
