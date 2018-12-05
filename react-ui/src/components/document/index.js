import React, {Component} from 'react';
import styles from './style.module.scss';

class Document extends Component{
    render(){
        return(
            <div className={styles["document"]}>
                <div style={{width: "1000px", background: "white", margin:"auto", height: "1000px"}}>
                </div>
            </div>
        )
    }
}

export default Document;