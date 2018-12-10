import React, {Component} from 'react';
import styles from './style.module.scss';
import toolboxStyles from 'components/toolbar/toolbox/toolbox.style.module.scss';

import { faAlignLeft, faAlignCenter, faAlignRight, faAlignJustify } from '@fortawesome/free-solid-svg-icons';

import Toolbox from 'components/toolbar/toolbox';
import ButtonSmall from 'components/toolbar/tools/button-small';
import FontSelector from 'components/toolbar/tools/font-selector';

class FontToolbox extends Component{
    constructor(props){
        super(props);
        this.tools = [
            {
                icon: faAlignLeft,
                name: 'Left',
                selected: true
            },{
                icon: faAlignCenter,
                name: 'Center'
            },{
                icon: faAlignRight,
                name: 'Right'
            },{
                icon: faAlignJustify,
                name: 'Justify'
            }
        ]
    }

    render(){
        let tools = this.tools.map(x=>(<ButtonSmall button={x} />));
        return(
            <Toolbox nametag="Alignment">
                <div className={toolboxStyles["section"]} style={{gridTemplateColumns: "1fr 1fr 1fr 1fr"}}>
                    {tools}
                </div>
            </Toolbox>
        );
    }
}

export default FontToolbox;