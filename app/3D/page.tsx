import React from 'react';
import Carrousel from '../components/carrousel';
import TitleSection from '../components/TitleSection';
import TextSection from '../components/TextSection';


export default function Home() {
  const images = [
    { ImgUrl: '/3D/colier.jpg', Description: 'Necklace', Lien: '/3D/Collier' },
    { ImgUrl: '/3D.jpg', Description: 'Figurine', Lien: '/3D/Figurine' },
    { ImgUrl: '/3D/ordi.jpg', Description: 'Laptop', Lien: '/3D/Ordi' },
    { ImgUrl: '/3D/office.jpg', Description: 'Low poly Environment ', Lien: '/3D/LowPoly' },
];
  return (
    <main>
    <TitleSection params={{ TextBold: '3D', TextItalic: '', Text: 'Modeling' }}/>

    <Carrousel images={images}/>


    <TextSection params={{   
      TitleBold : '3D experience',
    TitleItalic : 'birth',
    TitleText : 'of my',
    Text : 'By the end of 2019, I began learning design and new software, which led me to start 3D modeling on my own to create raw material for photo manipulation. This later helped me learn the JavaScript library, Three.js, enabling me to create immersive websites with integrated 3D elements.',
    }}/>

    </main>
  );
}
