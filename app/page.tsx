import React from 'react';
import Header from './components/header';
import Gallery from './components/gallery';
import Button_back from './components/button_back';


export default function Home() {
  return (
    <main>
      <Header/>
      <div>
        <p className='px-10 mx-12 w-auto text-7xl my-20 tracking-wide leading-tight '>
        Hi I’m <strong>BNJ</strong> , <br/>
        I’m a Full stack <strong>developer</strong><br/> 
        with a <em>passion for creating</em> and a<br/> <strong>polyvalent</strong> skill set.
        </p>
      </div>
      <Gallery/>

      <Button_back/>

    </main>
  );
}
