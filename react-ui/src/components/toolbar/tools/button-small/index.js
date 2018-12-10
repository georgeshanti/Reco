import React, { Component } from 'react';
import styles from './style.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class ButtonSmall extends Component{
    constructor(props){
        super(props);
        this.focus =  false;
        this.state = {
            tip: false
        }
        this.onMouseEnter = this.onMouseEnter.bind(this);
        this.onMouseLeave = this.onMouseLeave.bind(this);
    }

    onMouseEnter = ()=>{
        this.focus = true;
        setTimeout(()=>{
            if(this.focus)
                this.setState({tip: true});
        },2000)
    }

    onMouseLeave = ()=>{
        this.focus = false;
        this.setState({tip: false});
    }

    render(){
        let tipClass = styles["tooltip"] + (this.state.tip ? (" " + styles["focus"]) : "")
        let buttonClass = styles["button"] + (this.props.button.selected ? (" " + styles["selected"]) : "")
        return(
            <div className={buttonClass} onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}>
                <FontAwesomeIcon icon={this.props.button.icon} />
                <span className={tipClass}>{ this.props.button.name }</span>
            </div>
        )
    }
}

export default ButtonSmall;