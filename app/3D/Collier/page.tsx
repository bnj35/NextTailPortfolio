import React from 'react'
import Text from '../../components/text'
import ImageTextSection from '../../components/ImageTextSection'



export default function Home() {
    return (
        <div className='sm:m-12 md:m-16'>
            <ImageTextSection params={{ImgSrc: '/3D/Clay/neckClay.jpg', 
                ImgAlt: 'Necklace', 
                TextTitle: '3D Necklace', 
                TextContent: 'Throughout my journey in the world of graphic design, I have had the opportunity to work on multiple client projects. Primarily in the music industry, I have created numerous posters and album covers in various styles and genres. This experience has provided me with significant skills and knowledge, which are valuable assets in a professional setting.'}}/>
                

                <Text params={{Title: 'Client Order', Text: 'Throughout my journey in the world of graphic design, I have had the opportunity to work on multiple client projects. Primarily in the music industry, I have created numerous posters and album covers in various styles and genres. This experience has provided me with significant skills and knowledge, which are valuable assets in a professional setting.'}}/>
        </div>
    )
}