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
import svnPng from '../../Images/Skills/svn.png'
import bootstrapPng from '../../Images/Skills/bootstrap.png'
import vuePng from '../../Images/Skills/vue.png'
import phpPng from '../../Images/Skills/php.png'
import mySqlPng from '../../Images/Skills/mysql.png'
import typescriptPng from '../../Images/Skills/typescript.png'
import nextjsPng from '../../Images/Skills/nextjs.png'
import graphqlPng from '../../Images/Skills/graphql.png'
import vuexPng from '../../Images/Skills/vuex.png'
import angularPng from '../../Images/Skills/angular.png'
import nodejsPng from '../../Images/Skills/nodejs.png'
import rxjsPng from '../../Images/Skills/rxjs.png'
import jasminePng from '../../Images/Skills/jasmine.png'
import lessPng from '../../Images/Skills/less.png'
import antdPng from '../../Images/Skills/antd.png'
import bemPng from '../../Images/Skills/bem.png'
import backbonejsPng from '../../Images/Skills/backbonejs.png'
import ejsPng from '../../Images/Skills/ejs.jpg'
import underscorePng from '../../Images/Skills/underscore.png'
import expressPng from '../../Images/Skills/express.png'
import javaPng from '../../Images/Skills/java.png'
import c_sharpPng from '../../Images/Skills/c#.png'
import pythonPng from '../../Images/Skills/python.png'
import djangoPng from '../../Images/Skills/django.png'
import jinjaPng from '../../Images/Skills/jinja.jpg'
import entityPng from '../../Images/Skills/entity.png'
import aspnetPng from '../../Images/Skills/aspnet.png'
import springPng from '../../Images/Skills/spring.png'
import thymeleafPng from '../../Images/Skills/thymeleaf.png'
import hibernatePng from '../../Images/Skills/hibernate.jpg'
import bladePng from '../../Images/Skills/blade.png'
import laravelPng from '../../Images/Skills/laravel.png'
import mongodbPng from '../../Images/Skills/mongodb.jpg'
import kotlinPng from '../../Images/Skills/kotlin.jpg'
import goPng from '../../Images/Skills/go.png'

export default class Skills extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: 'Frontend'
        };
        this.skills = {
            frontend: [
                {
                    name: "JavaScript",
                    src: jsPng
                },
                {
                    name: "HTML5",
                    src: htmlPng
                },
                {
                    name: "CSS3",
                    src: cssPng
                },
                {
                    name: "React",
                    src: reactPng
                },
                {
                    name: "Redux",
                    src: reduxPng
                },
                {
                    name: "Typescript",
                    src: typescriptPng
                },
                {
                    name: "Vue",
                    src: vuePng
                },
                {
                    name: "Vuex",
                    src: vuexPng
                },
                {
                    name: "Angular",
                    src: angularPng
                },
                {
                    name: "Antd",
                    src: antdPng,
                },
                {
                    name: "Backbone.js",
                    src: backbonejsPng
                },
                {
                    name: "RxJs",
                    src: rxjsPng,
                },
                {
                    name: "Jasmine",
                    src: jasminePng
                },
                {
                    name: "NextJs",
                    src: nextjsPng
                },
                {
                    name: "GraphQL",
                    src: graphqlPng
                },
                {
                    name: "Webpack",
                    src: webpackPng
                },
                {
                    name: "Less",
                    src: lessPng
                },
                {
                    name: "Underscore",
                    src: underscorePng
                },
                {
                    name: "BEM",
                    src: bemPng
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
                    name: "Bootstrap",
                    src: bootstrapPng
                }
            ],
            backend: [
                {
                    name: "Java",
                    src: javaPng
                },
                {
                    name: "C#",
                    src: c_sharpPng
                },
                {
                    name: "PHP",
                    src: phpPng
                },
                {
                    name: "Python",
                    src: pythonPng
                },
                {
                    name: "NodeJs",
                    src: nodejsPng
                },
                {
                    name: "Go",
                    src: goPng
                },
                {
                    name: "Kotlin",
                    src: kotlinPng
                },
                {
                    name: "Spring",
                    src: springPng
                },
                {
                    name: "ASP.NET",
                    src: aspnetPng
                },
                {
                    name: "Laravel",
                    src: laravelPng
                },
                {
                    name: "Django",
                    src: djangoPng
                },
                {
                    name: "Express",
                    src: expressPng
                },
                {
                    name: "MySql",
                    src: mySqlPng
                },
                {
                    name: "MongoDB",
                    src: mongodbPng
                },
                {
                    name: "Entity",
                    src: entityPng
                },
                {
                    name: "Hibernate",
                    src: hibernatePng
                },
                {
                    name: "Thymeleaf",
                    src: thymeleafPng
                },
                {
                    name: "Blade",
                    src: bladePng
                },
                {
                    name: "Jinja",
                    src: jinjaPng
                },
                {
                    name: "EJS",
                    src: ejsPng
                },
            ],
            other: [
                {
                    name: "GIT",
                    src: gitPng
                },
                {
                    name: "SVN",
                    src: svnPng
                },
            ]
        }
    }

    onChangeTab(activeTab){
        this.setState({
            activeTab
        })
    }

    tabIsActive(tab){
        return tab === this.state.activeTab ? 'tabs-item__item_active' : ''
    }

    render(){

        const {activeTab} = this.state;

        const frontendSkills = this.skills.frontend.map((item, index) => {
            return <Skill name={item.name} src={item.src} key={index}/>
        });

        const backendSkills = this.skills.backend.map((item, index) => {
            return <Skill name={item.name} src={item.src} key={index}/>
        });

        const otherSkills = this.skills.other.map((item, index) => {
            return <Skill name={item.name} src={item.src} key={index}/>
        });
        console.log(activeTab);
        return(
            <div className='skills'>
                <h3 className='skills__name'>Skills</h3>
                <ul className='skills-tabs'>
                    <li className='tabs-item' onClick={() => this.onChangeTab('Frontend')}><a className={this.tabIsActive('Frontend') + ' tabs-item__item'}>Frontend</a></li>
                    <li className='tabs-item' onClick={() => this.onChangeTab('Backend')}><a className={this.tabIsActive('Backend') + ' tabs-item__item'}>Backend</a></li>
                    <li className='tabs-item' onClick={() => this.onChangeTab('Other')}><a className={this.tabIsActive('Other') + ' tabs-item__item'}>Other</a></li>
                </ul>
                <ul className='skills-container'>
                    {
                        (activeTab === 'Frontend' && frontendSkills) ||
                        (activeTab === 'Backend' && backendSkills) ||
                        (activeTab === 'Other' && otherSkills)
                    }
                </ul>
                {/*{activeTab === 'Frontend' &&*/}
                {/*<ul className='skills-container'>*/}
                    {/*{frontendSkills}*/}
                {/*</ul>*/}
                {/*}*/}
                {/*{activeTab === 'Backend' &&*/}
                {/*<ul className='skills-container'>*/}
                    {/*{backendSkills}*/}
                {/*</ul>*/}
                {/*}*/}
                {/*{activeTab === 'Other' &&*/}
                {/*<ul className='skills-container'>*/}
                    {/*{otherSkills}*/}
                {/*</ul>*/}
                {/*}*/}
            </div>
        )
    }

}