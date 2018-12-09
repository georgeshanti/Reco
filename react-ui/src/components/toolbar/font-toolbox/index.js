import React, {Component} from 'react';
import styles from './style.module.scss';

import { faBold, faItalic, faUnderline } from '@fortawesome/free-solid-svg-icons';

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

            },{
                icon: faItalic,
                name: 'Italic'
            },{
                icon: faUnderline,
                name: 'Underline'
            }
        ]
    }

    render(){
        let tools = this.tools.map(x=>(<ButtonSmall button={x} />));
        return(
            <Toolbox nametag="Font">
                <FontSelector />
                <input type="number" className={styles["font-size"]} />
                <div style={{display: "grid", gridTemplateColumns: "1fr 1fr 1fr", width: "96px"}}>
                    {tools}
                </div>
            </Toolbox>
        );
    }
}

export default FontToolbox;