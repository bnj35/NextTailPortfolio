import React from 'react'
import Text from '../../components/text'
import ImageTextSection from '../../components/ImageTextSection'



export default function Home() {
    return (
        <div className='sm:m-12 md:m-16'>
            <ImageTextSection params={{ImgSrc: '/3D/Clay/neckClay.jpg', 
                ImgAlt: 'Necklace', 
                TextTitle: '3D Necklace', 
                TextContent: 'This project is one of the first 3D models I created. It was originally intended for use as a visual component of a drumkit that was ultimately never released. Nevertheless, this initial project allowed me to learn how to use the 3D software Blender, including modifiers and textures. The initial requirement took a back seat, giving way to a deeper exploration of the software and the world of 3D modeling.'}}/>               
        </div>
    )
}