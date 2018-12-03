import React, {Component} from 'react';
import styles from './style.module.scss';

class Document extends Component{
    render(){
        return(
            <div className={styles["document"]}>
                <h1>Document</h1>
            </div>
        )
    }
}

export default Document;