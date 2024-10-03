import React from 'react';

interface AboutGalleryProps {
  images: { src: string; alt: string }[];
}

function AboutGallery({ images }: AboutGalleryProps) {
  return (
    <div className='my-32'>
    <div className="grid auto-rows-[40em] grid-cols-1 md:grid-cols-2 gap-4">
        {images.map((image, i) => (
        <div
            key={i}
            className={`row-span-1 ${i === 2 || i === 5 ? "md:col-span-2" : ""}`}
        >
            <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover rounded-2xl"
            />
        </div>
        ))}
    </div>
    </div>
  );
}

export default AboutGallery;