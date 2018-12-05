import React, { Component } from 'react';
import styles from './style.module.scss';

import Toolbar from 'components/toolbar';
import Document from 'components/document';
import HorizontalDivider from 'components/horizontal-divider';

class FileViewer extends Component{
    render(){
        return(
            <div className={styles["file-viewer"]}>
                <Toolbar />
                <HorizontalDivider />
                <Document />
            </div>
        )
    }
}

export default FileViewer;