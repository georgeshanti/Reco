import React, { Component } from 'react';
import styles from './style.module.scss';

import Tab from './tab';

class TabBar extends Component {
  render() {
    let tabs=this.props.tabs.map((x, i)=>(<Tab file={x} changeTab={this.props.changeTab(i)} selected={this.props.selected==i}/>))
    return (
      <div className={styles["tabbar"]}>
        {tabs}
      </div>
    );
  }
}

export default TabBar;
