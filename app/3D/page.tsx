import React from 'react';
import Carrousel from '../components/carrousel';


export default function Home() {
  const images = [
    { ImgUrl: '/3D/colier.jpg', Description: 'Necklace', Lien: '#' },
    { ImgUrl: '/3D.jpg', Description: 'Figurine', Lien: '#' },
    { ImgUrl: '/3D/ordi.jpg', Description: 'Laptop', Lien: '#' },
    { ImgUrl: '/3D/bandana.jpg', Description: 'Bandanas', Lien: '#' },
    { ImgUrl: '/3D/office.jpg', Description: 'Low poly Environment ', Lien: '#' },
];
  return (
    <main>
      <div className='flex justify-center items-center'>
        <p className='px-10 mx-12 w-auto text-[6rem] my-44 tracking-wide leading-tight '><strong>3D</strong> Modeling</p>
      </div>

      <h2 className='text-[4em] px-10 mx-12 py-5'>Discover my <strong>projects</strong></h2>

      <div className='flex m-10'>
    <Carrousel images={images}/>
    </div>

    <div>

      <h2 className='text-[4em] px-10 mx-12 my-20'>The <em>birth</em> of my <br/><strong>3D experience</strong></h2>

        <p className='px-10 mx-12 w-auto text-5xl my-20 tracking-wide leading-tight '>
        By the end of 2019, I began learning design and new software, which led me to start 3D modeling on my own to create raw material
        for photo manipulation. This later helped me learn the JavaScript library, Three.js, enabling me to create immersive websites with integrated 3D elements.
        </p>

      </div>

    </main>
  );
}
