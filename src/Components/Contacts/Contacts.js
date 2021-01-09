import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTelegram } from '@fortawesome/free-brands-svg-icons'
import { faVk } from '@fortawesome/free-brands-svg-icons'
// import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

import './styles/Contacts.css'

export default class Contacts extends Component{

    constructor(props){
        super(props);
        this.contacts = {
            number: '+7(985)736-80-94',
            email: 'borodindb97@mail.ru'
        };
        this.media = {
            vk: {
                href: 'https://vk.com/id210042263',
                icon: faVk
            },
            telegram: {
                href: 'https://t.me/borodindb97',
                icon: faTelegram
            }
            // linkedIn: {
            //     href: '',
            //     icon: faLinkedin
            // }
        }
    }


    render(){
        return(
            <div className='contacts'>
                <h3 className='contacts__title'>Contacts</h3>
                <div className='contacts-me'>
                    <h4 className='contacts-me__title'>You can contact me ⬇</h4>
                    <span className='contacts-me__number'>{this.contacts.number}</span>
                    <span className='contacts-me__email'>{this.contacts.email}</span>
                </div>
                <h4 className='contacts__text'>And also you can find me in social networks ⬇</h4>
                <ul className='media'>
                    <li className='media__item'>
                        <a className='media__link' href={this.media.vk.href}>
                            <FontAwesomeIcon icon={this.media.vk.icon} size='3x' color='#4a76a8'/>
                        </a>
                    </li>
                    <li className='media__item'>
                        <a className='media__link' href={this.media.telegram.href}>
                            <FontAwesomeIcon icon={this.media.telegram.icon} size='3x' color='#0f89d0'/>
                        </a>
                    </li>
                    {/*<li className='media__item'>*/}
                        {/*<a className='media__link' href={this.media.linkedIn.href}>*/}
                            {/*<FontAwesomeIcon icon={this.media.linkedIn.icon} size='3x' color='#4a76a8'/>*/}
                        {/*</a>*/}
                    {/*</li>*/}
                </ul>
            </div>
        )
    }
}