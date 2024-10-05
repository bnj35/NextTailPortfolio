import React from 'react'

export default function Gallery({params,}:{    params: {
  ImgUrl: string;
  CardLink: string;
  CardText: string;
}}){ 
  return (

      <div className='w-[95%] lg:w-[45%] md:w-[85%]'>
        <a href={params.CardLink}>
            <img className='aspect-square w-[100%] rounded-[2rem] object-cover saturate-0 hover:saturate-100 transition-all'src={params.ImgUrl}></img>
              <p className='p-3 text-xl'>{params.CardText}</p>
          </a>
      </div>


  )
}
