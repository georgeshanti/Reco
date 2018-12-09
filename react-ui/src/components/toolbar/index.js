import React, {Component} from 'react';
import styles from './style.module.scss';

import FileToolbox from './file-toolbox';
import FontToolbox from './font-toolbox';
import AlignToolbox from './align-toolbox';

class Toolbar extends Component{
    render(){
        return(
            <div className={styles["toolbar"]}>
                <FileToolbox />
                <FontToolbox />
                <AlignToolbox />
            </div>
        )
    }
}

export default Toolbar;