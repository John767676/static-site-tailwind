import React from 'react';

// https://i.ibb.co/tZzF3n1/IMAGE-3.png

const Milkshakes = () => {
    return (
        <div className='h-[800px] bg-cover bg-no-repeat' style={{backgroundImage: 'url("https://svgshare.com/i/n2a.svg")'}}>
            <div className='w-full bg-gray-100/50 relative'>
                <h2 className='text-center pt-16'>
                    <span className='text-rose-600 text-7xl uppercase'>
                        NEW
                    </span>
                    <span className='text-7xl capitalize'>
                        Magic Milkshakes
                    </span>
                </h2>
                <p className='text-3xl text-center mt-10'>Two scoops of magic and one of ice cream?</p>
                <p className='text-3xl text-center pb-16'>Introducing delicious milkshakes with our real artisan ice cream.</p>
                <p className='uppercase text-rose-600 absolute text-3xl text-center right-40 top-32'>try <br/>today</p>
            </div>
        </div>
    );
};

export default Milkshakes;