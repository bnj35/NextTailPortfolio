import React from 'react';
import Carrousel from '../components/carrousel';



export default function Home() {
  const images = [
    { ImgUrl: '/Video/BANI.jpg', Description: 'Announcement video for BANI', Lien: 'https://youtu.be/qoUhi17C2fo' },
    { ImgUrl: '/Video/motionCours.jpg', Description: 'Motion School Project', Lien: 'https://www.youtube.com/watch?v=1ria9sT0-NE' },
    { ImgUrl: '/Video/StoryHvdock.jpg', Description: 'Story Visualizer', Lien: 'https://www.instagram.com/stories/highlights/17991764828385375/' },
    { ImgUrl: '/Video/motionDjavan1.jpg', Description: 'Album Post', Lien: 'https://www.instagram.com/p/CpBcZzeDAcq/' },
    
];
  return (
    <main>
      <div className='flex justify-center items-center'>
        <p className='px-10 mx-12 w-auto text-[6rem] my-44 tracking-wide leading-tight '><strong>Video</strong> and <em>Motion</em></p>
      </div>

      <h2 className='text-[4em] px-10 mx-12 py-5'>Discover my <strong>projects</strong></h2>

      <div className='flex m-10'>
    <Carrousel images={images}/>
    </div>

    <div>

      <h2 className='text-[4em] px-10 mx-12 my-20'>The <em>origin</em> of my <br/><strong>video journey</strong></h2>

        <p className='px-10 mx-12 w-auto text-5xl my-20 tracking-wide leading-tight '>
        By the end of 2019, I began learning design and new software, which led me to 
        start taking photos and videos for my work. I then learned how to edit and animate 
        by creating motion designs for clients, working on projects at school, and doing it 
        for fun on the side.
        </p>

      </div>

    </main>
  );
}
