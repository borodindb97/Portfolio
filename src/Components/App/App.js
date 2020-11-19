import React, { Component } from 'react'
import {Route, Switch} from 'react-router-dom'

import Header from '../Header/Header'
import Skills from '../Skills/Skills'
import MyWorks from '../MyWorks/MyWorks'
import Contacts from '../Contacts/Contacts'
import Footer from '../Footer/Footer'

import './styles/App.css'

export default class App extends Component {

    render(){
        return (
            <div className="app">
                <Header />
                <main className='main-container'>
                    <Switch>
                        <Route exact path='/' component={Skills} />
                        <Route path='/myWorks' component={MyWorks} />
                        <Route path='/contacts' component={Contacts} />
                    </Switch>
                </main>
            </div>)
    }

}
