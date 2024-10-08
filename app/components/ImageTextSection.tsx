import React from 'react'
import Text from './text'

function ImageTextSection({params,}:{ params: {
    ImgSrc: string;
    ImgAlt: string;
    TextTitle: string;
    TextContent: string
}
}
) {
  return (
    
    <div className='w-full  my-20 '>
    <div className='flex justify-between gap-20 flex-wrap lg:flex-nowrap'>
        <Text params={{Title: params.TextTitle, Text: params.TextContent}}/>
        <div className=' w-full lg:h-auto h-80'>
        <img src={params.ImgSrc} alt={params.ImgAlt} className='w-full h-full object-cover rounded-2xl'/>
        </div>
    </div>
    </div>
  )
}

export default ImageTextSection