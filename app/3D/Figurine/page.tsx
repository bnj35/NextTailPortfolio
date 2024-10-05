import React from 'react'
import ImageTextSection from '../../components/ImageTextSection'

export default function Home() {
    return (
        <div className='m-8 md:m-12 lg:m-16'>
            <ImageTextSection params={{ImgSrc: '/3D/clay/FiguClay.jpg', 
                ImgAlt: 'Figurine', 
                TextTitle: 'Figurine', 
                TextContent: 'One of our class projects in 2023 was to create a video game using the Gdevelop online game engine. My teammate and I got deeply involved in the project, spending a lot of time developing this 2D platformer. I became so invested that I decided to model a figurine of the main character hitting a slime from the game, as a way to have a physical keepsake of the project.'}}/>
        </div>
    )
}