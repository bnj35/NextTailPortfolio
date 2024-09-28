import React from 'react'

function Text({params,}:{    params: {
    Title: string;
    Text: string;
}}) {

  return (
    <div>
        <h2 className='text-[4em] px-10 mx-12 my-20'>{params.Title}</h2>

    <p className='px-10 mx-12 w-auto text-5xl my-20 tracking-wide leading-tight '>
    {params.Text}
    </p>
    </div>
    )
}

export default Text