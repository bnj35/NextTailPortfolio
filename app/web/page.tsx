import React from 'react';
import CarrouselImg from '../components/carrousel';


export default function Home() {
  return (
    <main>
      <div className='flex justify-center items-center'>

        <p className='px-10 mx-12 w-auto text-[6rem] my-44 tracking-wide leading-tight '><strong>Web</strong> Development</p>

      </div>


      <h2 className='text-[4em] px-10 mx-12 py-5'>Discover my <strong>projects</strong></h2>


      <div className='max-w-max h-[70vh] flex gap-12 my-10'id="carrousel">

    <CarrouselImg params={{
      ImgUrl: '/about.jpg',
      Description: 'Description de l\'image',
      Lien: '#'
    }} />


    </div>


    <div>

      <h2 className='text-[4em] px-10 mx-12 my-20'>The <em>foundation</em> of my <strong>coding adventure</strong></h2>

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
