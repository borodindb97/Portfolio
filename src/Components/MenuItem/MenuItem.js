import React, { Component } from 'react'
import {Link} from 'react-router-dom'

import './styles/menuItem.css'

export default class MenuItem extends Component{
    constructor(props){
        super(props);
        this.state = {
            isHovered: false
        }
    }

    onMouseMoveAndLeaveHandler(){
        this.setState({
            isHovered: !this.state.isHovered
        })
    }

    render(){
        if (this.state.isHovered){
            return(
                <li className='navigation-item' >
                    <Link className='navigation-item__link navigation-item__link_hovered' onMouseLeave={this.onMouseMoveAndLeaveHandler.bind(this)} to={this.props.href}>{this.props.nameItem}</Link>
                    <div className="navigation-item__line"></div>
                </li>
            )
        } else {
            return (
                <li className='navigation-item' >
                    <Link className='navigation-item__link' onMouseMove={this.onMouseMoveAndLeaveHandler.bind(this)} to={this.props.href}>{this.props.nameItem}</Link>
                </li>
            )
        }


    }
}
