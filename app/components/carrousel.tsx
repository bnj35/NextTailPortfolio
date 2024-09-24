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
        console.log('Move left:', { scrollLeft: carouselRef.current.scrollLeft });
    };


    const handleMoveRight = () => {
        if (!carouselRef.current) return;
        carouselRef.current.scrollLeft += 490; 
        console.log('Move right:', { scrollLeft: carouselRef.current.scrollLeft });
    };



    return (
        <div className='w-full'>
            <div className=" overflow-hidden flex">
                <div
                    ref={carouselRef}
                    className="flex space-x-4 cursor-grab active:cursor-grabbing drag-none "
                    style={{ scrollBehavior: 'smooth', overflowX: 'hidden', whiteSpace: 'nowrap' }} // Ensure the container is scrollable
                    onDragStart={dragStart}
                >
                    {images.map((image, index) => (
                        <div key={index} className="min-w-[30em] ml-40">
                            <a href={image.Lien}>
                                <img
                                    src={image.ImgUrl}
                                    alt={image.Description}
                                    className="h-[40em] object-cover rounded-lg"
                                />
                            </a>
                            <p className="text-center mt-2">{image.Description}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className='flex justify-end text-5xl mt-10 mr-10 gap-10 rounded-lg'>
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