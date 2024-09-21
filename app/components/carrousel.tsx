import React from 'react'

export default function CarrouselImg({params,}:{    params: {
    ImgUrl: string;
    Description: string;
    Lien: string;
}}) {

return (
        <div>
            <a href={params.Lien}>
            <img src={params.ImgUrl} alt={params.Description} className='aspect-square h-[100%] w-auto rounded-3xl object-cover '/>
                <p>Description de l'image</p></a>
        </div>

)
}

