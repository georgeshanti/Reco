import React, { Component } from 'react';
import styles from './style.module.scss';

class HorizontalDivider extends Component {
  render() {
    return (
      <div className={styles["horizontal-divider"]} style={{background: "grey"}}></div>
    );
  }
}

export default HorizontalDivider;
