import React, {Component} from 'react';
import styles from './style.module.scss';

import { faSave, faClone, faPrint, faFilePdf, faUndo, faRedo } from '@fortawesome/free-solid-svg-icons';

import ButtonSmall from 'components/toolbar/tools/button-small';
import Toolbox from 'components/toolbar/toolbox';

class FileToolbox extends Component{
    constructor(props){
        super(props);
        this.tools = [
            {
                icon: faSave,
                name: "Save"
            },
            {
                icon: faClone,
                name: "Clone"
            },
            {
                icon: faUndo,
                name: "Undo"
            },
            {
                icon: faRedo,
                name: "Redo"
            },
            {
                icon: faPrint,
                name: "Print"
            },
            {
                icon: faFilePdf,
                name: "Print PDF"
            }
        ]
    }

    render(){
        let tools = this.tools.map(x=>(<ButtonSmall button={x} />));
        return(
            <Toolbox nametag="File">
                <div style={{display: "grid", gridTemplateColumns: "1fr 1fr"}}>
                    {tools}
                </div>
            </Toolbox>
        );
    }
}

export default FileToolbox;