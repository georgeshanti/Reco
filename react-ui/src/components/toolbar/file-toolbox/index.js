import React, {Component} from 'react';
import styles from './style.module.scss';
import toolboxStyles from 'components/toolbar/toolbox/toolbox.style.module.scss';

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
            }
        ]
        this.tools1=[
            {
                icon: faUndo,
                name: "Undo"
            },
            {
                icon: faRedo,
                name: "Redo"
            }
        ]
        this.tools2=[
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
        let tools1 = this.tools1.map(x=>(<ButtonSmall button={x} />));
        let tools2 = this.tools2.map(x=>(<ButtonSmall button={x} />));
        return(
            <Toolbox nametag="File">
                <div className={toolboxStyles["section"]} style={{gridTemplateColumns: "1fr 1fr"}}>
                    {tools}
                </div>
                <div className={toolboxStyles["section"]} style={{gridTemplateColumns: "1fr 1fr"}}>
                    {tools1}
                </div>
                <div className={toolboxStyles["section"]} style={{gridTemplateColumns: "1fr 1fr"}}>
                    {tools2}
                </div>
            </Toolbox>
        );
    }
}

export default FileToolbox;