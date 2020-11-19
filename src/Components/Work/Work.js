import React, { Component } from 'react'
import {Link} from 'react-router-dom'

import './styles/Work.css'

export default class Work extends Component{
    constructor(props){
        super(props);
        this.state = {
            isHovered: false,
            afterHovered: false
        }
    }

    onMouseMoveAndLeaveHandler(){
        this.setState({
            isHovered: !this.state.isHovered,
            afterHovered: true
        })
    }

    render(){

        if (this.state.isHovered){
            if (this.props.adaptive) {
                return (
                    <li className='work' onMouseLeave={this.onMouseMoveAndLeaveHandler.bind(this)}>
                        <div className="work-hovered work-hovered_isHovered">
                            <h3 className='work-hovered__name'>{this.props.name}</h3>
                            <a className='work-hovered__href' href={this.props.link}>Open</a>
                            {/*<Link className='work-hovered__description' to={this.props.link}>Description </Link>*/}
                        </div>
                        <img className='work__img work__img_isHovered' src={this.props.img} alt=""/>
                    </li>
                )
            } else {
                return (
                    <li className='work' onMouseLeave={this.onMouseMoveAndLeaveHandler.bind(this)}>
                        <div className="work-hovered work-hovered_isHovered">
                            <h3 className='work-hovered__name'>{this.props.name}</h3>
                            <a className='work-hovered__href' href={this.props.link}>Open</a>
                            <p className="work-hovered__noAdaptive">No responsive design!</p>
                            {/*<Link className='work-hovered__description' to={this.props.link}>Description </Link>*/}
                        </div>
                        <img className='work__img work__img_isHovered' src={this.props.img} alt=""/>
                    </li>
                )
            }
        }  else if (this.state.afterHovered) {
            if (this.props.adaptive) {
                return (
                    <li className='work' onMouseMove={this.onMouseMoveAndLeaveHandler.bind(this)}>
                        <div className="work-hovered work-hovered_afterHovered">
                            <h3 className='work-hovered__name'>{this.props.name}</h3>
                            <a className='work-hovered__href' href={this.props.link}>Open</a>
                            {/*<Link className='work-hovered__description' to={this.props.link}>Description </Link>*/}
                        </div>
                        <img className='work__img work__img_afterHovered' src={this.props.img} alt=""/>
                    </li>
                )
            } else {
                return (
                    <li className='work' onMouseMove={this.onMouseMoveAndLeaveHandler.bind(this)}>
                        <div className="work-hovered work-hovered_afterHovered">
                            <h3 className='work-hovered__name'>{this.props.name}</h3>
                            <a className='work-hovered__href' href={this.props.link}>Open</a>
                            <p className="work-hovered__noAdaptive">No responsive design!</p>
                            {/*<Link className='work-hovered__description' to={this.props.link}>Description </Link>*/}
                        </div>
                        <img className='work__img work__img_afterHovered' src={this.props.img} alt=""/>
                    </li>
                )
            }

            // return (
            //     <li className='work' onMouseMove={this.onMouseMoveAndLeaveHandler.bind(this)}>
            //         <div className="work-hovered work-hovered_afterHovered">
            //             <h3 className='work-hovered__name'>{this.props.name}</h3>
            //             <a className='work-hovered__href' href={this.props.link}>Open</a>
            //             {/*<Link className='work-hovered__description' to={this.props.href}>Description </Link>*/}
            //         </div>
            //         <img className='work__img work__img_afterHovered' src={this.props.img} alt=""/>
            //     </li>
            // )
        } else {
            return(
                <li className='work' onMouseMove={this.onMouseMoveAndLeaveHandler.bind(this)}>
                    <img className='work__img' src={this.props.img} alt=""/>
                </li>
            )
        }

    }



}



