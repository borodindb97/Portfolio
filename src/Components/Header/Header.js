import React, { Component } from 'react'

import Logo from '../Logo/Logo'
import Menu from '../Menu/Menu'
import PrintLine from '../PrintLine/PrintLine'

import './styles/header.css'

export default class Header extends Component{


    render(){
        return (
            <>
                <header className="header">
                    <Logo/>
                    <PrintLine/>
                    <Menu/>
                </header>
                <hr/>
            </>
        )
    }
}