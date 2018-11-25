import React, { Component } from 'react';
import styles from './style.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile } from '@fortawesome/free-solid-svg-icons';

class ExplorerFile extends Component {
  constructor(props){
    super(props);
    this.state = {
      contents: []
    }
  }

  render() {
    return (
      <div className={styles["file"]}>
        <div className={styles["nameholder"]} style={{paddingLeft: (this.props.level*20) + "px"}}>
            <div className={styles["icon"]}><FontAwesomeIcon icon={faFile} /></div>
            {this.props.name}
        </div>
      </div>
    );
  }
}

export default ExplorerFile;
