import React from 'react';

const Poster = () => {
    return (
        <div className='w-full bg-orange-300 flex flex-col justify-center items-center'>
            <div className='relative'>
                <h1 className='capitalize text-rose-600 text-[160px] max-w-3xl text-center'>freshly churned every day.</h1>
                <p className='absolute uppercase text-amber-700 max-w-[150px] text-center -left-[75px] top-[460px] text-xl'>HOVER FOR FLAVORS</p>
            </div>
            <div className='w-full h-screen bg-orange-300'>
                <div className='bg-orange-300 flex items-center justify-around'>
                    <img className='ml-5' src="https://i.ibb.co/vQcPRN0/IMAGE.png" alt="corn"/>
                    <img className='w-[250px]' src="https://i.ibb.co/KD19RWt/IMAGE-1.png" alt="img1"/>
                    <img className='w-[400px]' src="https://i.ibb.co/7RLDvnY/IMAGE-2.png" alt="img2"/>
                    <img className='w-[400px]' src="https://i.ibb.co/qM9vyN4/IMAGE-3.png" alt="img3"/>
                    <img className='w-[250px]' src="https://i.ibb.co/n8dY7Jt/IMAGE-4.png" alt="img4"/>
                    <img className='mr-5 rotate-180' src="https://i.ibb.co/vQcPRN0/IMAGE.png" alt="corn"/>
                </div>
                <div className='mt-49 w-full bg-orange-300'>
                    <h3 className='uppercase text-rose-600 text-2xl text-center mb-10 mt-16'>FEATURED IN</h3>
                    <div className='mb-10 flex items-center justify-around'>
                        <img src="https://svgshare.com/i/mzc.svg" alt="prom2"/>
                        <img src="https://svgshare.com/i/n09.svg" alt="prom1"/>
                        <img src="https://svgshare.com/i/n0v.svg" alt="prom4"/>
                        <img src="https://svgshare.com/i/n1E.svg" alt="prom3"/>
                        <img src="https://svgshare.com/i/mzc.svg" alt="prom2"/>
                        <img src="https://svgshare.com/i/n09.svg" alt="prom1"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Poster;