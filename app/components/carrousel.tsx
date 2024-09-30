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
            <div className='flex justify-end text-5xl mt-10 mr-28 gap-10 rounded-lg'>
                <button onClick={handleMoveLeft}>
                    <p> &lt; </p>
                </button>
                <button onClick={handleMoveRight}>
                    <p> &gt; </p>
                </button>
            </div>
        </div>
    );
}