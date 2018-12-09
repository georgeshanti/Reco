import React, { Component } from 'react';
import styles from './style.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

class ButtonSmall extends Component{
    constructor(props){
        super(props);
        this.state = {
            tip: true
        }
    }

    render(){
        let tipClass = styles["tooltip"] + (this.state.tip ? (" " + styles["focus"]) : "")
        return(
            <div className={styles["font-selector"]}>
                <div className={styles["selected"]}>
                    <span className={styles["field"]}>Times New Roman</span>
                    <div className={styles["icon"]}>
                        <FontAwesomeIcon icon={faCaretDown} />
                    </div>
                </div>
            </div>
        )
    }
}

export default ButtonSmall;