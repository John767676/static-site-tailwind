import React from 'react';

const About = () => {
    return (
        <div className='bg-gray-100 flex flex-col justify-center'>
            <div className='border-2 border-rose-600 flex items-center justify-between'>
                <div className='px-16 max-w-4xl'>
                    <h2 className='text-rose-600 text-5xl mb-9'>We only use the highest quality ingredients</h2>
                    <p className='text-2xl'>The Slab is based on a simple, nostalgic idea: paying tribute to the original American ice cream parlor – built on quality ice cream, delicious toppings and a fun and inviting experience.</p>
                </div>
                <img className='' src="https://i.ibb.co/XXVJZCW/IMAGE.png" alt="about1"/></div>
            <div className='border-2 border-rose-600 flex items-center justify-between'>
                <div className='px-16 max-w-4xl'>
                    <h2 className='text-rose-600 text-5xl mb-9'>Supporting our local farmers</h2>
                    <p className='text-2xl'>Ice cream with the look and taste of an old favorite. Every bite melts in your mouth to leave a creamy, rich aftertaste. All of this is a direct result of our support for local farms with the best ingredients. Supplied fresh every morning, for every batch.</p>
                </div>
                <img className='' src="https://i.ibb.co/nk4Td8d/IMAGE-1.png" alt="about2"/></div>
            <div className='border-2 border-rose-600 flex items-center justify-between'>
                <div className='px-16 max-w-4xl'>
                    <h2 className='text-rose-600 text-5xl mb-9'>Special flavors added every week</h2>
                    <p className='text-2xl'>Participate in our Weekly Magic Flavor competition on Instagram and have your creative flavor added to the menu — for an ENTIRE month! If your flavor is selected, you receive 10 free cones on us!</p>
                </div>
                <img className='' src="https://i.ibb.co/S74Jw7D/IMAGE-2.png" alt="about3"/></div>
        </div>
    );
};

export default About;