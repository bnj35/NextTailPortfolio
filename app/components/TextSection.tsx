import React from 'react'

export default function TextSection({params,}:{ params: {
    TitleBold : string;
    TitleItalic : string;
    TitleText : string;
    Text : string;
}
}
) {
    return (
    <div className='mt-10 m-4 lg:mt-0 lg:m-0'>

    <h2 className='text-2xl my-4 md:text-4xl md:my-6 lg:text-[4em] lg:px-10 lg:mx-12 lg:my-20 lg:leading-tight'>The <em>{params.TitleItalic}</em> {params.TitleText}<br/><strong>{params.TitleBold}</strong></h2>

    <p className='text-base md:text-2xl lg:px-10 lg:mx-12 lg:w-auto lg:text-5xl lg:my-20 lg:tracking-wide lg:leading-tight '>
    {params.Text}
    </p>

    </div>
    )
}
