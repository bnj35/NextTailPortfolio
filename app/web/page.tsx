import React from 'react';
import Carrousel from '../components/carrousel';


export default function Home() {
  const images = [
    { ImgUrl: '/3D.jpg', Description: 'Beautiful Landscape', Lien: '#' },
    { ImgUrl: '/about.jpg', Description: 'Ocean View', Lien: '#' },
    { ImgUrl: '/graphism.jpg', Description: 'Mountain Peak', Lien: '#' },
    { ImgUrl: '/3D.jpg', Description: 'Beautiful Landscape', Lien: '#' },
    { ImgUrl: '/about.jpg', Description: 'Ocean View', Lien: '#' },
    { ImgUrl: '/graphism.jpg', Description: 'Mountain Peak', Lien: '#' },
    { ImgUrl: '/graphism.jpg', Description: 'Mountain Peak', Lien: '#' },
    { ImgUrl: '/3D.jpg', Description: 'Beautiful Landscape', Lien: '#' },
    { ImgUrl: '/about.jpg', Description: 'Ocean View', Lien: '#' },
    { ImgUrl: '/graphism.jpg', Description: 'Mountain Peak', Lien: '#' },
];
  return (
    <main>
      <div className='flex justify-center items-center'>

        <p className='px-10 mx-12 w-auto text-[6rem] my-44 tracking-wide leading-tight '><strong>Web</strong> Development</p>

      </div>


      <h2 className='text-[4em] px-10 mx-12 py-5'>Discover my <strong>projects</strong></h2>


      <div className='flex my-10'>

    <Carrousel images={images}/>


    </div>


    <div>

      <h2 className='text-[4em] px-10 mx-12 my-20'>The <em>foundation</em> of my <br/><strong>coding adventure</strong></h2>

        <p className='px-10 mx-12 w-auto text-5xl my-20 tracking-wide leading-tight '>
        After graduating high school with honors, I began pursuing a Bachelor's degree in Technology at university,
        where I am currently studying multimedia and computer science. There, I started coding by developing web applications 
        and creative websites, always striving to achieve a strong aesthetic design through a deep focus on the UX and UI of
          my projects.
        </p>

      </div>

    </main>
  );
}
