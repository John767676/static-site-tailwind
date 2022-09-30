import React from 'react';

const Header = () => {
    return (
        <header className='w-full h-[112px] bg-orange-300 border-b-2 border-black'>
            <nav className='flex items-center justify-around py-7'>
                <ul className='flex font-bold gap-6'>
                    <li>menu</li>
                    <li>find us</li>
                </ul>
                <span className='text-7xl text-rose-600 font-bold'>
                    The Magic Slab
                </span>
                <button className='px-[24px] py-[14px] w-[150px] h-[53px] uppercase bg-rose-600 rounded-md text-white text-center'>contact us</button>
            </nav>
        </header>
    );
};

export default Header;