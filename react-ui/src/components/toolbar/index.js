import React, {Component} from 'react';
import styles from './style.module.scss';

class Toolbar extends Component{
    render(){
        return(
            <div className={styles["toolbar"]} style={{background: "lightgrey"}}>
                <h1>Toolbar</h1>
            </div>
        )
    }
}

export default Toolbar;