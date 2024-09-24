import React from 'react';
import Carrousel from '../components/carrousel';


export default function Home() {
  const images = [
    { ImgUrl: '/3D.jpg', Description: 'Beautiful Landscape', Lien: '#' },
    { ImgUrl: '/about.jpg', Description: 'Ocean View', Lien: '#' },
    { ImgUrl: '/graphism.jpg', Description: 'Mountain Peak', Lien: '#' },
    { ImgUrl: '/3D.jpg', Description: 'Beautiful Landscape', Lien: '#' },
    { ImgUrl: '/3D.jpg', Description: 'Beautiful Landscape', Lien: '#' },
    { ImgUrl: '/about.jpg', Description: 'Ocean View', Lien: '#' },
    { ImgUrl: '/graphism.jpg', Description: 'Mountain Peak', Lien: '#' },
    { ImgUrl: '/3D.jpg', Description: 'Beautiful Landscape', Lien: '#' },
  
];
  return (
    <main>
      <div className='flex justify-center items-center'>
        <p className='px-10 mx-12 w-auto text-[6rem] my-44 tracking-wide leading-tight '><strong>Video</strong> and <em>Motion</em></p>
      </div>

      <h2 className='text-[4em] px-10 mx-12 py-5'>Discover my <strong>projects</strong></h2>

      <div className='flex my-10'>
    <Carrousel images={images}/>
    </div>

    <div>

      <h2 className='text-[4em] px-10 mx-12 my-20'>The <em>origin</em> of my <br/><strong>video journey</strong></h2>

        <p className='px-10 mx-12 w-auto text-5xl my-20 tracking-wide leading-tight '>
        By the end of 2019, I began learning design and new software, which led me to 
        start taking photos and videos for my work. I then learned how to edit and animate 
        by creating motion designs for clients, working on projects at school, and doing it 
        for fun on the side.
        </p>

      </div>

    </main>
  );
}
