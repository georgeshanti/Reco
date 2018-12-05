import React, { Component } from 'react';
import styles from './style.module.scss';

import TabBar from 'components/tabbar';
import FileViewer from 'components/file-viewer';

class Workspace extends Component {
  render() {
    return (
      <div className={styles["workspace"]}>
        <TabBar />
        <FileViewer />
      </div>
    );
  }
}

export default Workspace;
