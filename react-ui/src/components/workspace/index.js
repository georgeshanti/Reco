import React, { Component } from 'react';
import styles from './style.module.scss';

import TabBar from 'components/tabbar';
import FileViewer from 'components/file-viewer';

class Workspace extends Component {
  constructor(props){
    super(props);
    this.state = {
      files: [
        {
          name: "Draft.doc",
          type: "doc"
        },
        {
          name: "Sheet.xls",
          type: "sprd"
        },
        {
          name: "Review.ppt",
          type: "ppt"
        }
      ],
      selected: 0
    };
    this.changeTab = this.changeTab.bind(this);
  }

  changeTab = (i) => () =>{
    this.setState({selected: i});
  }

  render() {
    let viewers = this.state.files.map((x, i) => {
      return (<FileViewer file={x} selected={i==this.state.selected}/>)
    });
    return (
      <div className={styles["workspace"]}>
        <TabBar selected={0} tabs={this.state.files} selected={this.state.selected} changeTab={this.changeTab}/>
        {viewers}
      </div>
    );
  }
}

export default Workspace;
