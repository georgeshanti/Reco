import React, { Component } from 'react';
import styles from './style.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';

import ExplorerFile from '../file';

class ExplorerFolder extends Component {
  constructor(props){
    super(props);
    this.state = {
      opened: false
    };
    this.getContents = this.getContents.bind(this);
    this.retrieved = false;
    this.contents = [];
  }

  getContents(){
    if(!this.retrieved){
        this.contents = window.ipc.sendSync('request-folder-contents', this.props.path);
        this.retrieved = true;
    }
    this.setState({opened: !this.state.opened});
  }

  render() {
    let contents = this.contents.map(x=>{
      let ExplorerItem = x.type=='folder'?ExplorerFolder:ExplorerFile;
        return (<ExplorerItem path={x.file_path} name={x.name} level={this.props.level+1}/>);
    });

    let display = this.state.opened?"block":"none";
    let rotation = this.state.opened?"rotate(45deg)":"rotate(0deg)";
    return (
      <div className={styles["folder"]}>
        <div className={styles["nameholder"]} style={{paddingLeft: (this.props.level*20) + "px"}} onClick={this.getContents}>
            <div className={styles["icon"]} style={{transform: rotation}}><FontAwesomeIcon icon={faCaretRight} /></div>
            {this.props.name}
        </div>
        <div className={styles["contents"]} style={{display: display}}>
            {contents}
        </div>
      </div>
    );
  }
}

export default ExplorerFolder;
