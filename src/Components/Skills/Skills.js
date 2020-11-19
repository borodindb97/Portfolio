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
import ajaxPng from '../../Images/Skills/ajax.png'
import jqueryPng from '../../Images/Skills/jquery.png'
import gitPng from '../../Images/Skills/git.png'
import lessPng from '../../Images/Skills/less.png'
import es6Jpg from '../../Images/Skills/es6.jpg'
import jasminePng from '../../Images/Skills/jasmine.png'
import mochaPng from '../../Images/Skills/mocha.png'
import npmPng from '../../Images/Skills/npm.png'
import bowerPng from '../../Images/Skills/bower.png'
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
                name: "Ajax",
                src: ajaxPng
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
            },
            {
                name: "Jasmine",
                src: jasminePng
            },
            {
                name: "Mocha",
                src: mochaPng
            },
            {
                name: "Bower",
                src: bowerPng
            },
            {
                name: "Npm",
                src: npmPng
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