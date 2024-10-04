import React from 'react'

function TitleSection({params,}:{ params: {
    TextBold : string;
    TextItalic : string;
    Text : string;
}
} ) {
return (

    <div className='flex justify-center items-center'>
        <p className='text-3xl md:text-5xl m-20 lg:px-10 lg:mx-12 lg:w-auto lg:text-[6rem] lg:my-44 lg:tracking-wide lg:leading-tight '><strong>{params.TextBold}</strong> {params.Text} <em>{params.TextItalic}</em></p>

    </div>
)
}

export default TitleSection