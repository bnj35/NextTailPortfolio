import React from 'react'
import Text from '../components/text'
import ImageTextSection from '../components/ImageTextSection'
import AboutGallery from '../components/AboutGallery'

export default function Home() {
    return (
        <div className='sm:m-12 md:m-16'>
            <ImageTextSection params={{ImgSrc: '/presentation.png', 
                ImgAlt: 'Beautiful Landscape', 
                TextTitle: 'About me', 
                TextContent: 'A 20-year-old graphic designer, I\'m passionate about web development, graphic design, and music. Known as "Benji" by those around me, I use the phonetic version of this nickname \"BNJ\" to establish my identity online.In 2022, I earned my high school diploma with honors (Maths/LLCE options) and achieved the Cambridge B2 English language certification. I then moved from the Lyon suburbs to Lorraine and Nancy to pursue a Bachelor of Technology in Multimedia and Internet Professions (BUT MMI), with the goal of becoming a full-stack web developer.'}}/>
            <AboutGallery/> 
            <div>
            <Text params={{Title: 'The foundation of my coding adventure',
                            Text: 'After graduating high school with honors, I began pursuing a Bachelor\'s degree in Technology at university, where I am currently studying multimedia and computer science. There, I started coding by developing web applications and creative websites, always striving to achieve a strong aesthetic design through a deep focus on the UX and UI of my projects.'}}/>
            </div>
        
            
        </div>
    )
}