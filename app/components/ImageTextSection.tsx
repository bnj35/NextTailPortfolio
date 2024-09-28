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
    <div className='flex justify-around'>
        <Text params={{Title: params.TextTitle, Text: params.TextContent}}/>
        <img src={params.ImgSrc} alt={params.ImgAlt} className='w-[full] h-[34em] object-cover rounded-2xl'/>
    </div>
  )
}

export default ImageTextSection