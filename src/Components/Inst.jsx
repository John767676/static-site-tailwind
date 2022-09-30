import React from 'react';

// https://svgshare.com/i/n39.svg
// https://svgshare.com/i/n3e.svg
// https://svgshare.com/i/n4d.svg

const Inst = () => {
    return (
        <div className='bg-rose-600'>
            <h1 className='capitalize text-white text-8xl text-center py-16'>
                @THEMAGICSLAB
            </h1>
            <h4 className='text-white text-2xl text-center pb-16'>
                Put the magic in your feed and follow us on Instagram for updates into our<br/>creamy world!
            </h4>
            <div className='relative'>
                <div className='flex items-center justify-between overflow-hidden mb-16'>
                    <img className='pl-8' src="https://svgshare.com/i/n39.svg" alt="inst1"/>
                    <img src="https://svgshare.com/i/n3e.svg" alt="inst2"/>
                    <img src="https://svgshare.com/i/n4d.svg" alt="inst3"/>
                    <img src="https://svgshare.com/i/n3V.svg" alt="inst4"/>
                </div>
                <p className='absolute top-[400px] left-10 text-xl'>Slide 2 of 6.</p>
                <h4 className='flex gap-2 items-center justify-center pb-24'>
                    <div className='w-3 h-3 bg-gray-100/50'></div>
                    <div className='w-3 h-3 bg-gray-100'></div>
                    <div className='w-3 h-3 bg-gray-100/50'></div>
                    <div className='w-3 h-3 bg-gray-100/50'></div>
                    <div className='w-3 h-3 bg-gray-100/50'></div>
                    <div className='w-3 h-3 bg-gray-100/50'></div>
                </h4>
            </div>
        </div>
    );
};

export default Inst;