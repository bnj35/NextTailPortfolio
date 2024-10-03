import React from 'react'
import Text from '../../components/text'
import AboutGallery from '@/app/components/AboutGallery'


const images = [
    { src: '/graphism/illu/1.png', alt: 'illu Poster' },
    { src: '/graphism/illu/2.png', alt: 'illu Poster' },
    { src: '/graphism/illu/scketch.png', alt: 'illu Poster' },
];

export default function Home() {
    return (
        <div className='sm:m-12 md:m-16'>
            <Text params={{Title: 'Office Illustration',
                            Text: 'A few years ago, I used to take a lot of train trips. During these journeys, I would draw frequently, and this sketch came out of that period. I found the character\'s relaxed posture amusing, so I decided to refine it and share it on social media.'}}/>
            <AboutGallery images={images}/>
        
            
        </div>
    )
}