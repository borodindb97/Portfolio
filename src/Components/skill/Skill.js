import React, { Component } from 'react'

import './styles/skill.css'

export default class Skill extends Component{
    constructor(props){
        super(props);
        this.state = {
            isScaled: false
        }
    }

    onMouseMoveAndLeaveHandler(){
        this.setState({
            isScaled: !this.state.isScaled
        })
    }

    render(){

        if (!this.state.isScaled){
            return(
                <li className='skill'>
                    <img className='skill__img skill__img_no-scaled' onMouseMove={this.onMouseMoveAndLeaveHandler.bind(this)} src={this.props.src} alt=""/>
                    <h3 className='skill__name'>{this.props.name}</h3>
                </li>
            )
        } else {
            return(
                <li className='skill'>
                    <img className='skill__img skill__img_scaled' onMouseLeave={this.onMouseMoveAndLeaveHandler.bind(this)} src={this.props.src} alt=""/>
                    <h3 className='skill__name'>{this.props.name}</h3>
                </li>
            )
        }

    }

}