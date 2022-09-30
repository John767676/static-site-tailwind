import React from 'react';

const Cake = () => {
    return (
        <div className='h-screen bg-orange-300 text-rose-600 flex items-center justify-around'>
            <div>
                <img src="https://svgshare.com/i/n46.svg" alt="cake1"/>
                <p></p>
            </div>
            <div>
                <h2 className='capitalize text-8xl'>Cater<br/>Your<br/>Next<br/>Event<br/>With</h2>
                <p className='max-w-2xl text-2xl'>Too many parties have an un-magical, sad lack of ice cream. The Magic Slab, where ice cream is handmade with love and attention, is changing that. Come treat your guests or team with the best ice cream you've ever tasted.</p>
            </div>
        </div>
    );
};

export default Cake;