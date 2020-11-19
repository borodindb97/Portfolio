import React, { Component } from 'react'

import './styles/Footer.css'

export default class Footer extends Component {
    constructor(props){
        super(props);
        this.state = {
            btnIsHovered: false
        }
    }

    onMouseLeaveAndMoveHandler(){
        this.setState({
            btnIsHovered: !this.state.btnIsHovered
        })
    }

    render(){
        if (this.state.btnIsHovered) {
            return (
                <footer className='footer'>
                    <a href="" className="footer__link footer__link_isHovered" onMouseLeave={this.onMouseLeaveAndMoveHandler.bind(this)}>GitHub</a>
                    <span className='footer__text'>Portfolio created on ReactJS</span>
                </footer>
            );
        } else {
            return (
                <footer className='footer'>
                    <a href="" className="footer__link" onMouseMove={this.onMouseLeaveAndMoveHandler.bind(this)}>GitHub</a>
                    <span className='footer__text'>Portfolio created on ReactJS</span>
                </footer>
                )
            }

        }
}