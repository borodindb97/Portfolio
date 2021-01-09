import React, { Component } from 'react'
import './styles/Github.css'

export default class Github extends Component{

    constructor(props){
        super(props);
        this.url = 'https://github.com/borodindb97';
        this.state = {
            isHovered: false
        }
    }

    onMouseLeaveAndMoveHandler(){
        this.setState({
            isHovered: !this.state.isHovered
        })
    }

    render(){
        if (this.state.isHovered){
            return( <>
                        <a href={this.url} className='github github_hovered' onMouseLeave={this.onMouseLeaveAndMoveHandler.bind(this)}> GitHub </a>
                    </>
            )
        } else {
            return( <>
                        <a href={this.url} className='github' onMouseMove={this.onMouseLeaveAndMoveHandler.bind(this)}> GitHub </a>
                    </>
            )
        }



    }

}