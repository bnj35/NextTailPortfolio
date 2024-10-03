"use client";
import React from 'react';


function Button_back() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className='flex justify-center mb-20 mt-60'>
                    <button onClick={scrollToTop}>
                <svg className="w-10 h-10 text-gray-400 hover:text-gray-800 transition-all" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 8">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7 7.674 1.3a.91.91 0 0 0-1.348 0L1 7"/>
                </svg>
            </button> 
        </div>
    );
}

export default Button_back;