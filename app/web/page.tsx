import React from 'react';
import Header from '../components/header';
import Carrousel from '../components/carrousel';

export default function Home() {
  return (
    <main>
      <Header/>
      <div className='flex justify-center items-center'>
        <p className='px-10 mx-12 w-auto text-[6rem] my-44 tracking-wide leading-tight '>
  <strong>Web</strong> Development</p>
        {/* <img src="app/img/OIP.jpg" alt="mousecursor" /> */}
      </div>

      <Carrousel/>
    </main>
  );
}
