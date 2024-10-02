import React from 'react'
import Text from '../../components/text'
import ImageTextSection from '../../components/ImageTextSection'
import AboutGallery from '@/app/components/AboutGallery'


const images = [
    { src: '/graphism/bloody.jpg', alt: 'Bloody Poster' },
    { src: '/graphism/bloody.jpg', alt: 'Bloody Poster' },
    { src: '/graphism/bloody.jpg', alt: 'Bloody Poster' },
    { src: '/graphism/bloody.jpg', alt: 'Bloody Poster' },
    { src: '/graphism/bloody.jpg', alt: 'Bloody Poster' },
];

export default function Home() {
    return (
        <div className='sm:m-12 md:m-16'>
            <ImageTextSection params={{ImgSrc: '/graphism/bloody.jpg', 
                ImgAlt: 'Beautiful Landscape', 
                TextTitle: 'About me', 
                TextContent: 'A 20-year-old graphic designer, I\'m passionate about web development, graphic design, and music. Known as "Benji" by those around me, I use the phonetic version of this nickname \"BNJ\" to establish my identity online.In 2022, I earned my high school diploma with honors (Maths/LLCE options) and achieved the Cambridge B2 English language certification. I then moved from the Lyon suburbs to Lorraine and Nancy to pursue a Bachelor of Technology in Multimedia and Internet Professions (BUT MMI), with the goal of becoming a full-stack web developer.'}}/>
            <div>

            <AboutGallery images={images}/>

            <Text params={{Title: 'My Skills',
                            Text: 'I chose to specialize in the Web Development and Interactive Systems track. I am thus enhancing my skills in designing and developing dynamic websites, interactive applications, and user-friendly interfaces while exploring the latest technologies and design trends. I’m proficient in HTML, CSS, JavaScript, PHP, Dart, Flutter, and SQL. I also know frameworks as NEXT.js, Swift.php and many more. I have expertise in graphic design and SEO, and I’m comfortable working with CMS platforms like WordPress and Prestashop. I also use the THREE.js JavaScript library and am currently enrolled in Bruno Simons\' THREE Journey course.'}}/>
            </div>
        
            
        </div>
    )
}