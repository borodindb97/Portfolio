import React, { Component } from 'react'

import MenuItem from '../MenuItem/MenuItem'

import './styles/Menu.css'

export default class Menu extends Component{
    constructor(props){
        super(props);
        this.menuItems = [
            {
                nameItem: 'Skills',
                href: '/'
            },
            {
                nameItem: 'My Works',
                href: '/myWorks'
            },
            {
                nameItem: 'Contacts',
                href: '/contacts'
            },
        ]
    }


    render(){

        let menuItems = this.menuItems.map((item, index) =>{
            return <MenuItem nameItem={item.nameItem} href={item.href} key={index}/>
        });

        return(
            <nav className='navigation'>
                <ul className='navigation-list'>
                    {menuItems}
                </ul>
            </nav>
        )
    }
}