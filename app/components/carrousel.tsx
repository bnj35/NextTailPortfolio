"use client";
import React, { useRef } from 'react';

interface CarouselProps {
    images: { ImgUrl: string; Description: string; Lien: string }[];
}

export default function Carousel({ images }: CarouselProps) {
    const carouselRef = useRef<HTMLDivElement | null>(null);

    const dragStart = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        const dragStart = e.clientX;
        const scrollLeft = carouselRef.current?.scrollLeft;
        if (scrollLeft !== undefined) {
            const handleDragMove = (e: MouseEvent) => {
                if (carouselRef.current) {
                    carouselRef.current.scrollLeft = scrollLeft + dragStart - e.clientX;
                }
            };
            const handleDragEnd = () => {
                EndCarrousel();
                document.removeEventListener('mousemove', handleDragMove);
                document.removeEventListener('mouseup', handleDragEnd);
            };
            document.addEventListener('mousemove', handleDragMove);
            document.addEventListener('mouseup', handleDragEnd);
        }
    }


    const handleMoveLeft = () => {
        if (!carouselRef.current) return;
        carouselRef.current.scrollLeft -= 490; 
    };


    const handleMoveRight = () => {
        if (!carouselRef.current) return;
        carouselRef.current.scrollLeft += 490; 
        EndCarrousel();
    }

    const EndCarrousel = () => {
        if (!carouselRef.current) return;
        if (carouselRef.current.scrollLeft === carouselRef.current.scrollWidth - carouselRef.current.clientWidth) {
            console.log('Reached end of carousel');
            carouselRef.current.scrollLeft = 0;
    };
}




    return (
        <div className='w-full'>
            <div className=" overflow-hidden flex">
                <div
                    ref={carouselRef}
                    className="flex space-x-4 drag-none scrollbar-hide"
                    style={{ scrollBehavior: 'smooth', overflowX: 'scroll', whiteSpace: 'nowrap' }} // Ensure the container is scrollable
                    onDragStart={dragStart}
                >

                    {images.map((image, index) => (
                        <div key={index} className="min-w-[30em]">
                            <a href={image.Lien}>
                                <img
                                    src={image.ImgUrl}
                                    alt={image.Description}
                                    className="h-[35em] object-cover rounded-lg"
                                />
                            </a>
                            <p className="mt-2 text-xl">{image.Description}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className='flex justify-end text-5xl mt-10 mr-28 gap-5 rounded-lg'>
                <button onClick={handleMoveLeft}>
                <svg className="w-8 h-8 text-gray-400 transform -rotate-90 hover:text-gray-800 transition-all" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 8">
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7 7.674 1.3a.91.91 0 0 0-1.348 0L1 7"/>
</svg>
                </button>
                <button onClick={handleMoveRight}>
                <svg className="w-8 h-8 text-gray-400 transform rotate-90 hover:text-gray-800 transition-all" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 8">
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7 7.674 1.3a.91.91 0 0 0-1.348 0L1 7"/>
</svg>
                </button>
            </div>
        </div>
    );
}