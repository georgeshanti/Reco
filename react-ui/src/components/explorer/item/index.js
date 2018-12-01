import React, { Component } from 'react';
import styles from './style.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight, faFile } from '@fortawesome/free-solid-svg-icons';

class ExplorerItem extends Component {
  constructor(props){
    super(props);
    this.state = {
      opened: false
    };
    this.retrieved = false;
    this.contents = [];
    var icon = faFile;
    if(this.props.type=='folder'){
      this.getContents = this.getContents.bind(this);
      this.icon = faCaretRight;
    }
    else{
      this.getContents = null;
      this.icon = faFile;
    }
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
      return (<ExplorerItem path={x.file_path} name={x.name} level={this.props.level+1} type={x.type}/>);
    });

    let display = this.state.opened?"block":"none";
    let rotation = this.state.opened?"rotate(45deg)":"rotate(0deg)";
    return (
      <div className={styles["item"]}>
        <div className={styles["nameholder"]} style={{paddingLeft: (this.props.level*20)+8+"px"}} onClick={this.getContents}>
            <div className={styles["icon"]} style={{transform: rotation}}><FontAwesomeIcon icon={this.icon} /></div>
            {this.props.name}
        </div>
        <div className={styles["contents"]} style={{display: display}}>
            {contents}
        </div>
      </div>
    );
  }
}

export default ExplorerItem;
