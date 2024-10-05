import React from 'react'
import ImageTextSection from '../../components/ImageTextSection'

export default function Home() {
    return (
        <div className='m-8 md:m-12 lg:m-16'>
            <ImageTextSection params={{ImgSrc: '/web/sktechfab.jpg', 
                ImgAlt: '3D Online Library', 
                TextTitle: 'Sketchfab Clone', 
                TextContent: 'One of the projects I completed during my studies was an online library of 3D models. I drew inspiration from Sketchfab while adhering to the requirements of the assignment. The project’s backend was built using PHP with the Slim framework, while the frontend was developed using vanilla JavaScript and the Three.js library to render the 3D models.'}}/>
        </div>
    )
}