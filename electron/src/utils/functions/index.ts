import * as fs from 'fs';
import * as path from 'path';
import { OfficeDirectory, OfficeFile } from '@misc/file-system';

function getFolderContents(dir_path:string):OfficeFile[]{
    let dir = new OfficeDirectory("hello", dir_path);
    return dir.contents;
}

export { getFolderContents };