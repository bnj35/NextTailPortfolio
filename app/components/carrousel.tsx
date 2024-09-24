import React from 'react'


export default function CarrouselImg({params,}:{    params: {
    ImgUrl: string;
    Description: string;
    Lien: string;
}}) {

return (
        <div>
            <a href={params.Lien}>
            <img src={params.ImgUrl} alt={params.Description} className='w-[40em] h-full rounded-[2rem] object-cover '/>
                <p className='p-3 text-xl'>Description de l'image</p></a>
        </div>

)
}

