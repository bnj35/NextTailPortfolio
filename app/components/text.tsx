import React from 'react'

function Text({params,}:{    params: {
    Title: string;
    Text: string;
}}) {

  return (
    <div className='w-full'>
        <h2 className='mb-10 text-[4em] font-bold'>{params.Title}</h2>

    <p className='w-auto mt-5 tracking-wide leading-tight sm:text-base md:text-2xl lg:text-4xl '>
    {params.Text}
    </p>
    </div>
    )
}

export default Text