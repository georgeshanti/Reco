import React, {Component} from 'react';
import styles from './style.module.scss';

import ButtonSmall from 'components/toolbar/tools/button-small';

class Toolbox extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className={styles["toolbox"]}>
                <div className={styles["tools-container"]}>
                    {this.props.children}
                </div>
                <span className={styles["nametag"]}>
                    {this.props.nametag}
                </span>
            </div>
        )
    }
}

export default Toolbox;