import React from 'react'
import ImageTextSection from '../../components/ImageTextSection'

export default function Home() {
    return (
        <div className='sm:m-12 md:m-16'>
            <ImageTextSection params={{ImgSrc: '/3D/Clay/OrdiClay.jpg', 
                ImgAlt: 'Ordi', 
                TextTitle: 'Laptop', 
                TextContent: 'In my previous portfolio, which was built using Three.js—a JavaScript library for rendering 3D content on websites—I needed a low-poly computer model (with fewer faces) to ensure smooth performance. I created my own 3D model with a screen showcasing my work. To integrate it into the website, I exported a .glb file without lighting or a camera, allowing me to use the framework’s own cameras and lighting to create unique motion and lighting effects.'}}/>
        </div>
    )
}