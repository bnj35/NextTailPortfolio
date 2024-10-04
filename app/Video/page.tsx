import React from 'react';
import Carrousel from '../components/carrousel';
import TitleSection from '../components/TitleSection';
import TextSection from '../components/TextSection';



export default function Home() {
  const images = [
    { ImgUrl: '/Video/BANI.jpg', Description: 'Announcement video for BANI', Lien: 'https://youtu.be/qoUhi17C2fo' },
    { ImgUrl: '/Video/motionCours.jpg', Description: 'Motion School Project', Lien: 'https://www.youtube.com/watch?v=1ria9sT0-NE' },
    { ImgUrl: '/Video/StoryHvdock.jpg', Description: 'Story Visualizer', Lien: 'https://www.instagram.com/stories/highlights/17991764828385375/' },
    { ImgUrl: '/Video/motionDjavan1.jpg', Description: 'Album Post', Lien: 'https://www.instagram.com/p/CpBcZzeDAcq/' },
    
];
  return (
    <main>
      <TitleSection params={{ TextBold: 'Video', TextItalic: 'Motion', Text: 'and' }}/>

    <Carrousel images={images}/>

    <TextSection params={{   
      TitleBold : 'video journey',
    TitleItalic : 'origin',
    TitleText : 'of my',
    Text : 'By the end of 2019, I began learning design and new software, which led me to start taking photos and videos for my work. I then learned how to edit and animate by creating motion designs for clients, working on projects at school, and doing it for fun on the side.',
    }}/>

    </main>
  );
}
