import React from 'react';
import CarrouselImg from '../components/carrousel';


export default function Home() {
  return (
    <main>
      <div className='flex justify-center items-center'>

        <p className='px-10 mx-12 w-auto text-[6rem] my-44 tracking-wide leading-tight '><strong>Web</strong> Development</p>

      </div>


      <h2 className='text-[4em] px-10 mx-12 py-5'>Discover my <strong>projects</strong></h2>


      <div className='max-w-max h-[70vh] flex gap-12 my-10'>

      <CarrouselImg params={{ 
        ImgUrl: 'https://images.unsplash.com/photo-1725610588109-71d0def86e19?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        Description: 'Web Development',
        Lien: 'https://www.google.com'
      }}/>

      <CarrouselImg params={{ 
        ImgUrl: 'https://images.unsplash.com/photo-1725610588109-71d0def86e19?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        Description: 'Web Development',
        Lien: 'https://www.google.com'
      }}/>

      <CarrouselImg params={{ 
        ImgUrl: 'https://images.unsplash.com/photo-1725610588109-71d0def86e19?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        Description: 'Web Development',
        Lien: 'https://www.google.com'
      }}/>
      


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
