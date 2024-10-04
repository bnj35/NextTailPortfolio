import React from 'react';
import Gallery from './components/gallery';


export default function Home() {
  return (
    <main>
      <div>
        <p className='px-6 mx-6 w-auto text-3xl my-20 tracking-wide leading-tight md:text-5xl md:px-8 md:mx-10 lg:text-7xl lg:px-10 lg:mx-12'>
        Hi I’m <strong>BNJ</strong> , <br/>
        I’m a Full stack <strong>developer</strong><br/> 
        with a <em>passion for creating</em> and a <br/> <strong>polyvalent</strong> skill set.
        </p>
      </div>

      <div className='px-10 py-10 flex flex-row gap-16 flex-wrap justify-center'>

        <Gallery params={{
          ImgUrl: '/web.jpg',
          CardLink: './web',
          CardText: 'Web Development'
        }}/>
        <Gallery params={{
          ImgUrl: '/graphism.jpg',
          CardLink: './graphism',
          CardText: 'Graphic design'
        }}/>
        <Gallery params={{
          ImgUrl: '/3D.jpg',
          CardLink: './3D',
          CardText: '3D modelisation'
        }}/>
        <Gallery params={{
          ImgUrl: '/video.jpg',
          CardLink: './Video',
          CardText: 'Video/Motion'
        }}/>
        </div>

        <div className='w-full px-10 h-[20em] md:px-16 lg:h-[40em] lg:px-24 lg:mb-36'>
          <a href="./about">
            <img src='/about.jpg' alt='placeholder' className='w-full h-full object-cover mt-5 rounded-[2em] saturate-0 hover:saturate-100 transition-all'/>
            <p className='p-3 text-xl'>About me</p>
          </a>
        </div>
    </main>
  );
}
