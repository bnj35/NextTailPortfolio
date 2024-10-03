import React from 'react'
import Text from '../../components/text'
import AboutGallery from '@/app/components/AboutGallery'


const images = [
    { src: '/graphism/bloody/affiche.jpg', alt: 'Bloody Poster' },
    { src: '/graphism.jpg', alt: 'Climbing Poster' },
    { src: '/graphism/bloody/typo.jpg', alt: 'Bloody Poster' },
    { src: '/graphism/FLOPPY.jpg', alt: 'Bloody Poster' },
    { src: '/graphism/bloody.jpg', alt: 'Bloody Poster' },
];

export default function Home() {
    return (
        <div className='sm:m-12 md:m-16'>
            <Text params={{Title: 'Posters',
                            Text: 'After a long period without using any graphic software, I felt inspired to create something using some old photos I found on Pexels and a typography concept I had thought of a while back. So, in the summer of 2024, I decided to design this experimental poster as a way to practice and maintain my proficiency with the software.'}}/>
            <AboutGallery images={images}/>
        
            
        </div>
    )
}