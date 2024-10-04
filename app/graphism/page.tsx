import React from 'react';
import Carrousel from '../components/carrousel';
import TitleSection from '../components/TitleSection';
import TextSection from '../components/TextSection';


export default function Home() {
  const images = [
    { ImgUrl: '/graphism/bloody.jpg', Description: 'Posters', Lien: './graphism/bloody' },
    { ImgUrl: '/graphism/dessin.jpg', Description: 'Room Illustration', Lien: '/graphism/illu' },
    { ImgUrl: '/graphism/algo.jpg', Description: 'Test AI', Lien: '/graphism/IA' },
    { ImgUrl: '/graphism/commandes.jpg', Description: 'Client order', Lien: '/graphism/commandes' },
  
];
  return (
    <main>
    <TitleSection params={{ TextBold: 'Graphism', TextItalic: 'Illustration', Text: 'and' }}/>

    <Carrousel images={images}/>

    <TextSection params={{   
      TitleBold : 'design journey',
    TitleItalic : 'source',
    TitleText : 'of my',
    Text : 'I started graphic design by doing digital drawings during the 2020 lockdown. It felt natural to explore every part of the software I was using and to train my eye through an endless search for new design trends and an appreciation for evolving styles.',
    }}/>

    </main>
  );
}
