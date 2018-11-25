import React, { Component } from 'react';
import logo from './logo.svg';
import styles from './App.module.scss';

import Explorer from 'components/explorer';
import Workspace from 'components/workspace';
import VerticalDivider from 'components/vertical-divider';

class App extends Component {
  render() {
    return (
      <div className={styles["App"]}>
        <div className={styles["bottom"]}>
          <Explorer />
          <VerticalDivider />
          <Workspace />
        </div>
      </div>
    );
  }
}

export default App;
