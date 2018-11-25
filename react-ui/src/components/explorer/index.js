import React, { Component } from 'react';
import styles from './style.module.scss';

import ExplorerFolder from './folder';
import ExplorerFile from './file';

class Explorer extends Component {
  constructor(props){
    super(props);
    this.state = {
      contents: []
    }
  }

  componentDidMount(){
    console.log(this.state.folder);
    this.setState({contents: window.ipc.sendSync('request-folder-contents', 'auto')});
  }

  render() {
    let contents = this.state.contents.map(x=>{
      let ExplorerItem = x.type=='folder'?ExplorerFolder:ExplorerFile;
        return (<ExplorerItem path={x.file_path} name={x.name} level={0} />);
    });
    return (
      <div className={styles["explorer"]} style={{background: "lightgrey"}}>
        {contents}
      </div>
    );
  }
}

export default Explorer;
