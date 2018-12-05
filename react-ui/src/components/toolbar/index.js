import React, {Component} from 'react';
import styles from './style.module.scss';

import SaveButton from 'components/tools/save';

class Toolbar extends Component{
    render(){
        return(
            <div className={styles["toolbar"]}>
                <SaveButton />
            </div>
        )
    }
}

export default Toolbar;