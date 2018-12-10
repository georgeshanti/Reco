import React, { Component } from 'react';
import styles from './style.module.scss';

import Tab from './tab';

class ToolTabBar extends Component {
  render() {
    return (
      <div className={styles["tooltabbar"]}>
        <Tab selected={true} name="Home"/>
        <Tab  name="Insert"/>
        <Tab  name="View"/>
      </div>
    );
  }
}

export default ToolTabBar;
