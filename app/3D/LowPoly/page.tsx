import React from 'react'
import Text from '../../components/text'
import ImageTextSection from '../../components/ImageTextSection'


export default function Home() {
    return (
        <div className='m-8 md:m-12 lg:m-16'>
            <ImageTextSection params={{ImgSrc: '/3D/Clay/LowClay.jpg', 
                ImgAlt: 'LowPoly', 
                TextTitle: 'LowPoly Environment', 
                TextContent: 'During a Bachelor\'s of Technology program, students work on independent projects of varying lengths and undergo several assessments. One such project involved creating a 3D environment that could be explored using Spatial.io or a VR headset, with the aim of delivering an augmented reality experience.'}}/>
                

                <Text params={{Title: 'Backstory & Technical Details', Text: 'Each of these environments represents an aspect of my life, whether it’s sports with the basketball court, studies with the classroom, or web development with the office where I used to work at my parents\' home. It felt natural to reuse these 3D models in my previous portfolio. From a technical standpoint, each space was created separately, with an effort to instance as many elements as possible and ensure that every object in the scene was optimized to make the models easily loadable on a website or in VR.'}}/>
        </div>
    )
}