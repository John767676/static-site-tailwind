import React from 'react';

const Footer = () => {
    return (
        <footer className='bg-orange-300 text-rose-600'>
            <h1 className='capitalize py-16 text-center text-8xl'>Come See Us</h1>
            <div className='flex items-center justify-around text-center'>
                <div className='flex flex-col items-center'>
                    <img src="https://svgshare.com/i/n3W.svg" alt="point"/>
                    <h2 className='uppercase text-8xl py-10'>NEW YORK</h2>
                    <h4 className='text-5xl pb-10'>646-394-3920</h4>
                    <p className='text-black text-3xl pb-32'>4096 Grove Street<br/>Farmingdale, NY 11735</p>
                </div>
                <div className='flex flex-col items-center'>
                    <img src="https://svgshare.com/i/n3W.svg" alt="point"/>
                    <h2 className='uppercase text-8xl py-10'>CHICAGO</h2>
                    <h4 className='text-5xl pb-10'>646-394-3920</h4>
                    <p className='text-black text-3xl pb-32'>1243 Virginia Street<br/>Chicago, IL 60629</p>
                </div>
            </div>
            <h6 className='text-black text-2xl text-center pb-4'>
                © 2022 by The Magic Slab.
            </h6>
        </footer>
    );
};

export default Footer;