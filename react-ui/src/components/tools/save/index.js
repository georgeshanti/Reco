import React, { Component } from 'react';
import buttonStyles from 'components/tools/button.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave } from '@fortawesome/free-solid-svg-icons';

class SaveButton extends Component{
    render(){
        return(
            <div className={buttonStyles["button"]}>
                <FontAwesomeIcon icon={faSave} />
            </div>
        )
    }
}

export default SaveButton;