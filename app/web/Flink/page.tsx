import React from 'react'
import Text from '../../components/text'
import ImageTextSection from '../../components/ImageTextSection'

export default function Home() {
    return (
        <div className='m-8 md:m-12 lg:m-16'>
            <ImageTextSection params={{ImgSrc: '/web/flink.jpg', 
                ImgAlt: 'Flink', 
                TextTitle: 'Flink', 
                TextContent: 'Flink is a project in development with my classmates that functions as a SaaS platform designed to gather all of a person\'s links, social networks, and websites onto a single page, similar to Linktree or Bento.me. The key advantages of this application will be its free access, shortened URLs, and the ability to generate QR codes to simplify access during virtual reality experiences.'}}/>
                

                <Text params={{Title: 'Technical details', Text: 'The project currently consists of a PHP backend using the Laravel framework and a frontend built with Nuxt/Vue.js. From a design perspective, we opted for a slightly neo-brutalist style with vibrant colors to create a modern and distinctive look. Roles within the team are not fixed, which means I may work on both the backend and frontend, making this project a unique and motivating experience.'}}/>
        </div>
    )
}