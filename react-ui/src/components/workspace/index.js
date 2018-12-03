import React, { Component } from 'react';
import styles from './style.module.scss';

import Toolbar from 'components/toolbar';
import Document from 'components/document';
import HorizontalDivider from 'components/horizontal-divider';

class Workspace extends Component {
  render() {
    return (
      <div className={styles["workspace"]} style={{background: "lightgrey"}}>
        <Toolbar />
        <HorizontalDivider />
        <Document />
      </div>
    );
  }
}

export default Workspace;
