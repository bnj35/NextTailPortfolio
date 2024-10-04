import React from 'react';
import Carrousel from '../components/carrousel';
import TitleSection from '../components/TitleSection';
import TextSection from '../components/TextSection';


export default function Home() {
  const images = [
    { ImgUrl: '/web.jpg', Description: 'Portfolio 3D', Lien: 'https://bnj.vercel.app/' },
    { ImgUrl: '/web/flink.jpg', Description: 'Flink', Lien: '/web/Flink' },
    { ImgUrl: '/web/filter.jpg', Description: 'Filtre Monochrome CSS', Lien: 'https://codepen.io/bnj35/pen/OJGjPpd' },
    { ImgUrl: '/web/sktechfab.jpg', Description: 'Sketchfab Clone', Lien: '/web/Clone' },
    { ImgUrl: '/web/color.jpg', Description: 'Random Color Generator', Lien: 'https://codepen.io/bnj35/pen/OJYLpNw' },
    

];
  return (
    <main>
      <TitleSection params={{ TextBold: 'Web', TextItalic: '', Text: 'Development' }}/>

    <Carrousel images={images}/>

    <TextSection params={{   
      TitleBold : 'coding adventure',
    TitleItalic : 'foundation',
    TitleText : 'of my',
    Text : ' After graduating high school with honors, I began pursuing a Bachelor\'s degree in Technology at university, where I am currently studying multimedia and computer science. There, I started coding by developing web applications and creative websites, alwaysstriving to achieve a strong aesthetic design through a deep focus on the UX and UI of my projects.',
    }}/>


    </main>
  );
}
