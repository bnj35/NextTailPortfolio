import React from 'react'
import Text from '../../components/text'
import ImageTextSection from '../../components/ImageTextSection'
import AboutGallery from '@/app/components/AboutGallery'


const images = [
    { src: '/graphism/commandes/e362.png', alt: 'Commandes'},
    { src: '/graphism/commandes/feu et eau1logo2.png', alt: 'Commandes'},
    { src: '/graphism/commandes/ISAACbonaparte.png', alt: 'Commandes'},
    { src: '/graphism/commandes/tracklist2rst.png', alt: 'Commandes'},
    { src: '/graphism/commandes/pedales.png', alt: 'Commandes'},

];

export default function Home() {
    return (
        <div className='sm:m-12 md:m-16'>
            <ImageTextSection params={{ImgSrc: '/graphism/commandes.jpg', 
                ImgAlt: 'Client Order', 
                TextTitle: 'Client Order', 
                TextContent: 'Throughout my journey in the world of graphic design, I have had the opportunity to work on multiple client projects. Primarily in the music industry, I have created numerous posters and album covers in various styles and genres. This experience has provided me with significant skills and knowledge, which are valuable assets in a professional setting.'}}/>
                

            <AboutGallery images={images}/>
        </div>
    )
}