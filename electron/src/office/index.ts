require('module-alias/register');

import * as Electron from 'electron';

import { registerListeners } from '@utils/listeners';

class Office{

    window:Electron.BrowserWindow;
    url:string;

    constructor(_url:string){
        this.url = _url;
    }

    createWindow = () => () => {
        this.window = new Electron.BrowserWindow({webPreferences: {webSecurity: false}});
        registerListeners();
        this.window.loadURL(this.url);
    }

    start():void{
        Electron.app.on('ready',this.createWindow());
    }
}
export { Office };
