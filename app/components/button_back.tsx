import React from 'react';

function Button_back() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className='flex justify-center mt-6 mb-10'>
            <a href="#">
                <button type="button" className="text-neutral-600 bg-neutral-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center me-2">
                    <svg className="aspect-square h-14 rotate-[-90deg]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                    <span className="sr-only">Icon description</span>
                </button>
            </a>
        </div>
    );
}

export default Button_back;