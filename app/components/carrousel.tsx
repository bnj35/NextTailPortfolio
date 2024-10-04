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

        <div>
        <h2 className='text-2xl px-2 mx-4 lg:text-[4em] lg:px-10 lg:mx-12 lg:py-5 '>Discover my <strong>projects</strong></h2>

        <div className='flex lg:m-10 my-4 mx-4 '>
        <div className='w-full'>
            <div className=" overflow-hidden flex">
                <div
                    ref={carouselRef}
                    className="flex space-x-4 drag-none scrollbar-hide"
                    style={{ scrollBehavior: 'smooth', overflowX: 'scroll', whiteSpace: 'nowrap' }} // Ensure the container is scrollable
                    onDragStart={dragStart}
                >

                    {images.map((image, index) => (
                        <div key={index} className="min-w-[20em] md:min-w-[25em] lg:min-w-[30em]">
                            <a href={image.Lien}>
                                <img
                                    src={image.ImgUrl}
                                    alt={image.Description}
                                    className="h-[25em] md:h-[30em] lg:h-[35em] object-cover rounded-lg"
                                />
                            </a>
                            <p className="mt-2 text-xl">{image.Description}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className='flex justify-end text-5xl lg:mt-10 mt-6 md:mr-20 mr-10 lg:mr-28 gap-5 rounded-lg'>
                <button onClick={handleMoveLeft}>
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-gray-400 transform -rotate-90 hover:text-gray-800 transition-all" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 8">
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7 7.674 1.3a.91.91 0 0 0-1.348 0L1 7"/>
</svg>
                </button>
                <button onClick={handleMoveRight}>
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-gray-400 transform rotate-90 hover:text-gray-800 transition-all" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 8">
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7 7.674 1.3a.91.91 0 0 0-1.348 0L1 7"/>
</svg>
                </button>
            </div>
        </div>
    </div>
    </div>
    );
}