import React from 'react'
import Text from '../../components/text'
import AboutGallery from '@/app/components/AboutGallery'


const images = [
    { src: '/graphism/bloody/affiche.jpg', alt: 'Bloody Poster' },
    { src: '/graphism.jpg', alt: 'Climbing Poster' },
    { src: '/graphism/bloody/rebond.jpg', alt: 'Bloody Poster' },
    { src: '/graphism/FLOPPY.jpg', alt: 'Bloody Poster' },
    { src: '/graphism/bloody.jpg', alt: 'Bloody Poster' },
];

export default function Home() {
    return (
        <div className='m-8 md:m-12 lg:m-16'>
            <Text params={{Title: 'Posters',
                            Text: 'During the lockdown, I began diving into graphic design, which provided me the opportunity to refine my eye for various styles and trends through continuous research and inspiration. This experience led me to stay updated on the latest design movements, allowing me to expand my creative vision. I worked on a variety of projects, including posters, branding, and digital illustrations, experimenting with different techniques and continuously honing my skills along the way. This period became a valuable time of growth and exploration, shaping my approach as a designer.'}}/>
            <AboutGallery images={images}/>
        
            
        </div>
    )
}