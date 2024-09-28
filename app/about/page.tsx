import React from 'react'
import Text from '../components/text'
import ImageTextSection from '../components/ImageTextSection'

export default function Home() {
    return (
        <div>
            <ImageTextSection params={{ImgSrc: '/3D.jpg', ImgAlt: 'Beautiful Landscape', TextTitle: 'Web development', TextContent: 'Discover my projects'}}/>
            <div className='w-full px-16 h-[40em] mb-36'>
                <img src='/about.jpg' alt='placeholder' className='w-full h-full object-cover mt-5 rounded-[2em]'/>
            </div>
            <Text params={{Title: 'The foundation of my coding adventure', Text: 'After graduating high school with honors, I began pursuing a Bachelor\'s degree in Technology at university, where I am currently studying multimedia and computer science. There, I started coding by developing web applications and creative websites, always striving to achieve a strong aesthetic design through a deep focus on the UX and UI of my projects.'}}/>
        </div>
    )
}