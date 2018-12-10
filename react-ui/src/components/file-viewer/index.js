import React, { Component } from 'react';
import styles from './style.module.scss';

import ToolTabbar from 'components/tooltabbar';
import Document from 'components/document';
import HorizontalDivider from 'components/horizontal-divider';
import Toolbar from 'components/toolbar';

class FileViewer extends Component{
    render(){
        let classname = styles["file-viewer"] + " " + styles[this.props.file.type] + " " + (this.props.selected ? styles["selected"] : "" )
        return(
            <div className={classname}>
                <ToolTabbar />
                <Toolbar />
                <HorizontalDivider />
                <Document />
            </div>
        )
    }
}

export default FileViewer;