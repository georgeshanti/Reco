import React, { Component } from 'react';
import styles from './style.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

class ToolTab extends Component {
  render() {
    let classname = styles["tab"] + ( this.props.selected?" "+styles["selected"]:"" );
    return (
      <div className={classname}>
        <div className={styles["grid"]}>
            <div className={styles["tabname"]}>{this.props.name}</div>
        </div>
      </div>
    );
  }
}

export default ToolTab;
