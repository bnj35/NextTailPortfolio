// "use client";
// import React, { useRef, useState, useEffect } from 'react';

// interface CarouselProps {
//     images: { ImgUrl: string; Description: string; Lien: string }[];
// }

// export default function Carousel({ images }: CarouselProps) {
//     const carouselRef = useRef<HTMLDivElement | null>(null);
//     const [isDragging, setIsDragging] = useState(false);
//     const [startX, setStartX] = useState(0);
//     const [scrollLeft, setScrollLeft] = useState(0);

//     // Mouse down: start dragging
//     const handleMouseDown = (e: React.MouseEvent) => {
//         if (!carouselRef.current) return;
//         setIsDragging(true);
//         setStartX(e.pageX - carouselRef.current.offsetLeft);
//         setScrollLeft(carouselRef.current.scrollLeft);
//         console.log('Mouse down:', { startX: e.pageX, scrollLeft: carouselRef.current.scrollLeft });
//     };

//     // Mouse move: drag the carousel
//     const handleMouseMove = (e: React.MouseEvent) => {
//         if (!isDragging || !carouselRef.current) return;
//         e.preventDefault();
//         const x = e.pageX - carouselRef.current.offsetLeft;
//         const walk = (x - startX) * 1.5; // Scroll faster with multiplier
//         carouselRef.current.scrollLeft = scrollLeft - walk;
//         console.log('Mouse move:', { x, walk, scrollLeft: carouselRef.current.scrollLeft });
//     };

//     // Mouse up or leave: stop dragging
//     const handleMouseUpOrLeave = () => {
//         setIsDragging(false);
//         console.log('Mouse up or leave');
//     };

//     // Wheel event: horizontal scrolling
//     const handleWheel = (e: WheelEvent) => {
//         if (!carouselRef.current) return;
//         e.preventDefault();
//         carouselRef.current.scrollLeft += e.deltaY * 3; // Multiply to increase scrolling speed
//         console.log('Wheel event:', { deltaY: e.deltaY, scrollLeft: carouselRef.current.scrollLeft });
//     };

//     // Use useEffect to add the wheel event listener with passive: false
//     useEffect(() => {
//         const carousel = carouselRef.current;

//         if (carousel) {
//             // Add the non-passive wheel event listener
//             carousel.addEventListener('wheel', handleWheel, { passive: false });
//         }

//         // Clean up the event listener on unmount
//         return () => {
//             if (carousel) {
//                 carousel.removeEventListener('wheel', handleWheel);
//             }
//         };
//     }, []);

//     return (
//         <div>
//             <div className="w-full overflow-hidden relative">
//                 <div
//                     ref={carouselRef}
//                     className="flex space-x-4 cursor-grab active:cursor-grabbing drag-none"
//                     style={{ scrollBehavior: 'smooth', overflowX: 'scroll', whiteSpace: 'nowrap' }} // Ensure the container is scrollable
//                     onMouseDown={handleMouseDown}
//                     onMouseMove={handleMouseMove}
//                     onMouseUp={handleMouseUpOrLeave}
//                     onMouseLeave={handleMouseUpOrLeave}
//                 >
//                     {images.map((image, index) => (
//                         <div key={index} className="min-w-[300px] ml-40">
//                             <a href={image.Lien}>
//                                 <img
//                                     src={image.ImgUrl}
//                                     alt={image.Description}
//                                     className="w-[30em] h-[40em] object-cover rounded-lg"
//                                 />
//                             </a>
//                             <p className="text-center mt-2 ">{image.Description}</p>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//             <div className='flex justify-end text-5xl m-10 gap-10 rounded-lg'>
//                 <button>
//                     <p> &lt; </p>
//                 </button>
//                 <button>
//                     <p> &gt; </p>
//                 </button>
//             </div>
//         </div>
//     );
// }*

"use client";
import React, { useRef, useState, useEffect } from 'react';

interface CarouselProps {
    images: { ImgUrl: string; Description: string; Lien: string }[];
}

export default function Carousel({ images }: CarouselProps) {
    const carouselRef = useRef<HTMLDivElement | null>(null);


    // Button click: move carousel left
    const handleMoveLeft = () => {
        if (!carouselRef.current) return;
        carouselRef.current.scrollLeft -= 300; // Adjust the value as needed
        console.log('Move left:', { scrollLeft: carouselRef.current.scrollLeft });
    };

    // Button click: move carousel right
    const handleMoveRight = () => {
        if (!carouselRef.current) return;
        carouselRef.current.scrollLeft += 300; // Adjust the value as needed
        console.log('Move right:', { scrollLeft: carouselRef.current.scrollLeft });
    };


    return (
        <div className='w-full'>
            <div className=" overflow-hidden flex">
                <div
                    ref={carouselRef}
                    className="flex space-x-4 cursor-grab active:cursor-grabbing drag-none "
                    style={{ scrollBehavior: 'smooth', overflowX: 'scroll', whiteSpace: 'nowrap' }} // Ensure the container is scrollable

                >
                    {images.map((image, index) => (
                        <div key={index} className="min-w-[300px] ml-40">
                            <a href={image.Lien}>
                                <img
                                    src={image.ImgUrl}
                                    alt={image.Description}
                                    className="w-[30em] h-[40em] object-cover rounded-lg"
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