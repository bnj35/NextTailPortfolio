import React from 'react'
import ImageTextSection from '../../components/ImageTextSection'
import AboutGallery from '@/app/components/AboutGallery'


const images = [
    { src: '/graphism/AI/algo.jpg', alt: 'AI Poster' },
    { src: '/graphism/AI/testpeau.png', alt: 'AI Poster' },
    { src: '/graphism/AI/toronto.jpg', alt: 'AI Poster' },
    { src: '/graphism/AI/wat.png', alt: 'AI Poster' },
    { src: '/graphism/AI/water.jpg', alt: 'AI Poster' },


];

export default function Home() {
    return (
        <div className='m-8 md:m-12 lg:m-16'>
            <ImageTextSection params={{ImgSrc: '/graphism/algo.jpg', 
                ImgAlt: 'Test AI', 
                TextTitle: 'Test AI', 
                TextContent: 'Since the emergence of artificial intelligence, I’ve closely followed the advancements in large language models, with a particular interest in image-generating AIs. When Adobe introduced its AI tool “Firefly,” I experimented with it by using the technology to texture hand-drawn logos and custom compositions. This allowed me to integrate AI into my workflow without leaving the entire creative process solely in the hands of the model.'}}/>
                

            <AboutGallery images={images}/>
        </div>
    )
}