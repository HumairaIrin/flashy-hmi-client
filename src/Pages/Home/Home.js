import React from 'react';
import banner from '../../images/banner.jpg';
import './Home.css'

const Home = () => {
    return (
        <div className='relative'>
            <div className='banner-section'>
                <img className='banner w-full' src={banner} alt=''></img>
            </div>
            <div>
                <h2 className='header-text font-bold absolute '>Makeup helps us to define features</h2>
                <p className='text-xl font-semibold short-text'>that wouldn't otherwise be prominent without it.</p>
                <p className='font-light text-sm absolute bottom-10 left-[40%] last-text'>Look the best on all your occasion</p>
            </div>
        </div>
    );
};

export default Home;