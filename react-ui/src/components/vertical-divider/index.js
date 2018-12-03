import React, { Component } from 'react';
import styles from './style.module.scss';

class VerticalDivider extends Component {
  render() {
    return (
      <div className={styles["vertical-divider"]} style={{background: "grey"}}>
      </div>
    );
  }
}

export default VerticalDivider;
