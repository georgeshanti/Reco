import React, { Component } from 'react';
import styles from './style.module.scss';

import Tab from './tab';

class TabBar extends Component {
  render() {
    return (
      <div className={styles["tabbar"]}>
        <Tab selected={true}/>
        <Tab />
        <Tab />
      </div>
    );
  }
}

export default TabBar;
