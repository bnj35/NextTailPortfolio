import React from 'react';
import Gallery from './components/gallery';


export default function Home() {
  return (
    <main>
      <div>
        <p className='px-10 mx-12 w-auto text-7xl my-20 tracking-wide leading-tight '>
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
          CardLink: 'https://www.google.com',
          CardText: 'Graphic design'
        }}/>
        <Gallery params={{
          ImgUrl: '/3d.jpg',
          CardLink: 'https://www.google.com',
          CardText: '3D modelisation'
        }}/>
        <Gallery params={{
          ImgUrl: '/video.jpg',
          CardLink: 'https://www.google.com',
          CardText: 'Video/Motion'
        }}/>
        </div>

        <div className='w-screen px-24 h-[40em] mb-36'>
          <a href="">
            <img src='/about.jpg' alt='placeholder' className='w-full h-full object-cover mt-5 rounded-[2em]'/>
            <p className='p-3 text-xl'>About me</p>
          </a>
        </div>


    </main>
  );
}
