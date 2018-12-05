import {ipcMain} from 'electron';
import * as fs from 'fs';
import * as path from 'path';

import { Office } from '@office/index.ts';
import { OfficeFile } from '@misc/file-system';
import { getFolderContents } from '@utils/functions';

class Listeners{
    office:Office;

    constructor(office:Office){
        this.office = office;
    }

    registerListeners():void{
        ipcMain.on('request-folder-contents', (event, arg) => {
            if(arg=='auto')
                arg = path.resolve(__dirname, '..', '..', '..', '..');
            let contents = getFolderContents(arg).map( x => {
                return {name: x.name, file_path: x.path, type: x.type};
            });
            event.returnValue = contents;
        })
    }
}

export {Listeners};