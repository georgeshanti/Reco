import * as fs from 'fs';
import * as path from 'path';

class OfficeFile{
    name:string;
    path:string;
    type:string;

    constructor(name:string, path:string){
        this.name = name;
        this.path = path;
        this.type = fs.statSync(this.path).isDirectory() ? 'folder': 'file';
    }
}

class OfficeDirectory extends OfficeFile{
    contents:OfficeFile[];
    constructor(name:string, _path:string){
        super(name, _path);
        let contents_names = fs.readdirSync(this.path);
        this.contents = contents_names.map( x => {
            var file:string = path.resolve(this.path, x);
            return new OfficeFile(x, file);
        });
    }

    updateContents():void{
        let contents_names = fs.readdirSync(this.path);
        this.contents = contents_names.map( x => {
            var file:string = path.resolve(this.path, x);
            return new OfficeFile(x, file);
        });
    }
}

export { OfficeFile, OfficeDirectory };