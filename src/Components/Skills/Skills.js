import React, { Component } from 'react'

import Skill from '../skill/skill'

import './styles/skills.css'

import reactPng from '../../Images/Skills/react.png'
import reduxPng from '../../Images/Skills/redux.png'
import jsPng from '../../Images/Skills/js.png'
import cssPng from '../../Images/Skills/css3.png'
import htmlPng from '../../Images/Skills/html5.png'
import webpackPng from '../../Images/Skills/webpack.png'
import gulpPng from '../../Images/Skills/gulp.png'
import jqueryPng from '../../Images/Skills/jquery.png'
import gitPng from '../../Images/Skills/git.png'
import lessPng from '../../Images/Skills/less.png'
import es6Jpg from '../../Images/Skills/es6.jpg'
import bootstrapPng from '../../Images/Skills/bootstrap.png'

export default class Skills extends Component{
    constructor(props){
        super(props);
        this.skills = [
            {
                name: "ReactJS",
                src: reactPng
            },
            {
                name: "Redux",
                src: reduxPng
            },
            {
                name: "JavaScript",
                src: jsPng
            },
            {
                name: "ES6",
                src: es6Jpg
            },
            {
                name: "CSS3",
                src: cssPng
            },
            {
                name: "HTML5",
                src: htmlPng
            },
            {
                name: "Webpack",
                src: webpackPng
            },
            {
                name: "Gulp",
                src: gulpPng
            },
            {
                name: "JQuery",
                src: jqueryPng
            },
            {
                name: "GIT",
                src: gitPng
            },
            {
                name: "Less",
                src: lessPng
            },
            {
                name: "Bootstrap",
                src: bootstrapPng
            }
        ]
    }

    render(){

        const skills = this.skills.map((item, index) => {
            return <Skill name={item.name} src={item.src} key={index}/>
        });

        return(
            <div className='skills'>
                <h3 className='skills__name'>Skills</h3>
                <ul className='skills-container'>
                    {skills}
                </ul>
            </div>
        )
    }

}