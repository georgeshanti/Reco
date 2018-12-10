import React, {Component} from 'react';
import styles from './style.module.scss';
import toolboxStyle from 'components/toolbar/toolbox/toolbox.style.module.scss';

import { faBold, faItalic, faUnderline, faSuperscript, faSubscript } from '@fortawesome/free-solid-svg-icons';

import Toolbox from 'components/toolbar/toolbox';
import ButtonSmall from 'components/toolbar/tools/button-small';
import FontSelector from 'components/toolbar/tools/font-selector';

class FontToolbox extends Component{
    constructor(props){
        super(props);
        this.tools = [
            {
                icon: faBold,
                name: 'Bold',
                selected: true
            },{
                icon: faItalic,
                name: 'Italic'
            },{
                icon: faUnderline,
                name: 'Underline'
            }
        ]

        this.tools1 = [
            {
                icon: faSuperscript,
                name: 'Superscript'
            },{
                icon: faSubscript,
                name: 'Subscript',
                selected: true
            }
        ]
    }

    render(){
        let tools = this.tools.map(x=>(<ButtonSmall button={x} />));
        let tools1 = this.tools1.map(x=>(<ButtonSmall button={x} />));
        return(
            <Toolbox nametag="Font">
                <div>
                    <FontSelector />
                    <input type="number" className={styles["font-size"]+ " "+toolboxStyle["section"]} />
                </div>
                <div className={toolboxStyle["row"]}>
                    <div className={toolboxStyle["section"]} style={{gridTemplateColumns: "42px 42px 42px", width:"calc(42px * 3)"}}>
                        {tools}
                    </div>
                    <div className={toolboxStyle["section"]} style={{gridTemplateColumns: "42px 42px", width:"calc(42px * 2)"}}>
                        {tools1}
                    </div>
                </div>
            </Toolbox>
        );
    }
}

export default FontToolbox;