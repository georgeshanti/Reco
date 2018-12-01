import React, { Component } from 'react';
import styles from './style.module.scss';

import ExplorerItem from './item';

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
      return (<ExplorerItem path={x.file_path} name={x.name} level={0} type={x.type}/>);
    });
    return (
      <div className={styles["explorer"]}>
        {contents}
      </div>
    );
  }
}

export default Explorer;
