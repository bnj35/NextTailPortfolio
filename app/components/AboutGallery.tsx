import React from 'react'

function AboutGallery() {
  return (
<div className='my-32'>
    <div className="grid auto-rows-[40em] grid-cols-1 md:grid-cols-2 gap-4">
        {[...Array(5)].map((_, i) => (
            <div
                key={i}
                className={`row-span-1 ${i === 2 ? "md:col-span-2" : ""}`}
            >
                <img
                    src={`/gallery/${i + 1}.jpg`}
                    alt={`Gallery image ${i + 1}`}
                    className="w-full h-full object-cover rounded-2xl"
                />
            </div>
        ))}
    </div>
</div>
  )
}

export default AboutGallery