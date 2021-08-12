import React, { Component } from 'react'

import Work from '../Work/Work'

// import healthHouseImg from '../../Images/works/healthHouse.png'
// import familyFarmsImg from '../../Images/works/familyFarms.png'
// import airbookingImg from '../../Images/works/airbooking.png'
// import waasImg from '../../Images/works/waas.png'
// import customTshirtsImg from '../../Images/works/customT-shirts.png'
// import graphicsEditorImg from '../../Images/works/graphics-editor.png'
// import testTaskTimeWebImg from '../../Images/works/testTaskTimeWeb.png'
// import testTaskMaksImg from '../../Images/works/testTaskMaks.png'
// import wineLifeImg from '../../Images/works/wineLife.png'
// import productLandingImg from '../../Images/works/landing.png'
// import galleryImg from '../../Images/works/gallery.png'
// import mapImg from '../../Images/works/map.png'
// import basketImg from '../../Images/works/basket.png'
// import testTaskWebBusterImg from '../../Images/works/web-buster_test_task.png'
// import testTaskGridnineSystemsImg from '../../Images/works/gridnine-systems-test-task.png'
// import testTaskLightHouseImg from '../../Images/works/light-house-test-task.png'
import travelrepublicImg from '../../Images/works/travelrepublic.png'
import wiloImg from '../../Images/works/wilo.png'
import sabreImg from '../../Images/works/sabre.png'

import './styles/myWorks.css'

export default class Skills extends Component{
    constructor(props){
        super(props);
        this.works = [
            {
                img: sabreImg,
                name: 'Sabre B2b',
                link: 'https://www.sabre.com/',
            },
            {
                img: wiloImg,
                name: 'Project margin calculator',
                link: 'https://wilo.com/en/index.html',
            },
            {
                img: travelrepublicImg,
                name: 'One Air Admin Portal',
                link: 'https://www.travelrepublic.co.uk/',
            },
            // {
            //     img: testTaskGridnineSystemsImg,
            //     name: 'Flights',
            //     link: 'https://gridnine-system-test-task.web.app/',
            //     adaptive: false
            // },
            // {
            //     img: testTaskLightHouseImg,
            //     name: 'Form',
            //     link: 'https://borodindb97.github.io/Projects/Lighthouse_test_task/index.html',
            //     adaptive: true
            // },
            // {
            //     img: customTshirtsImg,
            //     name: 'Custom T-shirt',
            //     link: 'https://borodindb97.github.io/Projects/Custom_t-shirts/custom_t-shirts.html',
            //     adaptive: true
            // },
            // {
            //     img: graphicsEditorImg,
            //     name: 'Graphics-editor',
            //     link: 'https://borodindb97.github.io/Projects/Graphics_editor/Canvas.html',
            //     adaptive: false
            // },
            // {
            //     img: testTaskTimeWebImg,
            //     name: 'Website-constructor',
            //     link: 'https://borodindb97.github.io/Projects/Timeweb_test_task/test_task_time_web.html',
            //     adaptive: false
            // },
            // {
            //     img: basketImg,
            //     name: 'Basket',
            //     link: 'https://borodindb97.github.io/Projects/Basket/index.html',
            //     adaptive: false
            // },
            // {
            //     img: testTaskMaksImg,
            //     name: 'Tabs',
            //     link: 'https://borodindb97.github.io/Projects/Web_studio_maks_test_task/index.html',
            //     adaptive: false
            // },
            // {
            //     img: mapImg,
            //     name: 'Map',
            //     link: 'https://borodindb97.github.io/Projects/Map/index.html',
            //     adaptive: false
            // },
            // {
            //     img: testTaskWebBusterImg,
            //     name: 'Modal-window',
            //     link: 'https://borodindb97.github.io/Projects/Web-buster_test-task/index.html',
            //     adaptive: false
            // },
            // {
            //     img: airbookingImg,
            //     name: 'Airbooking',
            //     link: 'https://borodindb97.github.io/Projects/Airbooking/airbooking.html',
            //     adaptive: false
            // },
            // {
            //     img: familyFarmsImg,
            //     name: 'Family Farm',
            //     link: 'https://borodindb97.github.io/Projects/Family_farms/family_farms.html',
            //     adaptive: false
            // },
            // {
            //     img: healthHouseImg,
            //     name: 'HealthHouse',
            //     link: 'https://borodindb97.github.io/Projects/Health_house/health_house.html',
            //     adaptive: false
            // },
            // {
            //     img: galleryImg,
            //     name: 'Gallery',
            //     link: 'https://borodindb97.github.io/Projects/Gallery/Gallery.html',
            //     adaptive: false
            // },
            // {
            //     img: waasImg,
            //     name: 'Waas',
            //     link: 'https://borodindb97.github.io/Projects/WaaS/index.html',
            //     adaptive: false
            // },
            // {
            //     img: productLandingImg,
            //     name: 'Product-Landing',
            //     link: 'https://borodindb97.github.io/Projects/Product_landing/index.html',
            //     adaptive: false
            // },
            // {
            //     img: wineLifeImg,
            //     name: 'WineLife',
            //     link: 'https://borodindb97.github.io/Projects/WineLife/index.html',
            //     adaptive: false
            // }
        ]
    }

    render(){
        let works = this.works.map((item, index) => {
           return <Work name = {item.name} img = {item.img} link = {item.link} key = {index}/>
        });
        return(
            <div className='myWorks'>
                <h3 className='myWorks__name'>Projects</h3>
                <ul className='myWorks-container'>
                    {works}
                </ul>
            </div>
        )
    }
}