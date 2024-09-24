import React from 'react';
import Carrousel from '../components/carrousel';


export default function Home() {
  const images = [
    { ImgUrl: '/3D.jpg', Description: 'Beautiful Landscape', Lien: '#' },
    { ImgUrl: '/about.jpg', Description: 'Ocean View', Lien: '#' },
    { ImgUrl: '/graphism.jpg', Description: 'Mountain Peak', Lien: '#' },
    { ImgUrl: '/3D.jpg', Description: 'Beautiful Landscape', Lien: '#' },
  
];
  return (
    <main>
      <div className='flex justify-center items-center'>
        <p className='px-10 mx-12 w-auto text-[6rem] my-44 tracking-wide leading-tight '><strong>Graphism</strong> and <em>Illustration</em></p>
      </div>

      <h2 className='text-[4em] px-10 mx-12 py-5'>Discover my <strong>projects</strong></h2>

      <div className='flex my-10'>
    <Carrousel images={images}/>
    </div>

    <div>

      <h2 className='text-[4em] px-10 mx-12 my-20'>The <em>source</em> of my <br/><strong>design journey</strong></h2>

        <p className='px-10 mx-12 w-auto text-5xl my-20 tracking-wide leading-tight '>
        I started graphic design by doing digital drawings during the 2020 lockdown. It felt natural to explore 
        every part of the software I was using and to train my eye through an endless search for new design trends 
        and an appreciation for evolving styles.
        </p>

      </div>

    </main>
  );
}
