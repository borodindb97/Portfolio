import React, { Component } from 'react'

import Work from '../Work/Work'

import healthHouseImg from '../../Images/works/healthHouse.png'
import familyFarmsImg from '../../Images/works/familyFarms.png'
import airbookingImg from '../../Images/works/airbooking.png'
import waasImg from '../../Images/works/waas.png'
import customTshirtsImg from '../../Images/works/customT-shirts.png'

import './styles/myWorks.css'

export default class Skills extends Component{
    constructor(props){
        super(props);
        this.works = [

            {
                img: customTshirtsImg,
                name: 'Custom T-shirt',
                link: 'https://boroda46.github.io/Projects/CUSTOM_T-SHIRTS/custom_t-shirts.html',
                adaptive: true
            },
            {
                img: waasImg,
                name: 'Waas',
                link: '#',
                adaptive: false
            },
            {
                img: airbookingImg,
                name: 'Airbooking',
                link: 'https://boroda46.github.io/Projects/Airbooking/airbooking.html',
                adaptive: false
            },
            {
                img: familyFarmsImg,
                name: 'Family Farm',
                link: 'https://boroda46.github.io/Projects/Family_Farms/family_farms.html',
                adaptive: false
            },
            {
                img: healthHouseImg,
                name: 'HealthHouse',
                link: 'https://boroda46.github.io/Projects/Health_House/health_house.html',
                adaptive: false
            }
        ]
    }

    render(){
        let works = this.works.map((item, index) => {
           return <Work name = {item.name} img = {item.img} link = {item.link} adaptive={item.adaptive} key = {index}/>
        });
        return(
            <div className='myWorks'>
                <h3 className='myWorks__name'>My works</h3>
                <ul className='myWorks-container'>
                    {works}
                </ul>
            </div>
        )
    }
}