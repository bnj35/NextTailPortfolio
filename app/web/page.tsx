import React from 'react';
import CarrouselImg from '../components/carrousel';

export default function Home() {
  return (
    <main>
      <div className='flex justify-center items-center'>
        <p className='px-10 mx-12 w-auto text-[6rem] my-44 tracking-wide leading-tight '>
  <strong>Web</strong> Development</p>
        {/* <img src="app/img/OIP.jpg" alt="mousecursor" /> */}
      </div>

      <CarrouselImg params={{ 
        ImgUrl: 'https://images.unsplash.com/photo-1725610588109-71d0def86e19?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        Description: 'Web Development'
      }}/>
    </main>
  );
}
