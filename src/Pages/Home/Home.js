import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import banner from '../../images/banner.jpg';
import Analytics from '../Analytics/Analytics';
import ServicesHomePage from '../ServicesHomePage/ServicesHomePage';
import TopLook from '../TopLook/TopLook';
import './Home.css'

const Home = () => {
    const [count, setCount] = useState(3);
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch(`https://flashy-hmi-server.vercel.app/limited?number=${count}`)
            .then(res => res.json())
            .then(data => setServices(data))
    }, [count])

    return (
        <div>
            <div className='banner-section relative'>
                <img className='banner w-full' src={banner} alt=''></img>
            </div>
            <div>
                <h2 className='header-text font-bold absolute '>Makeup helps us to define features</h2>
                <p className='text-xl font-semibold short-text'>that wouldn't otherwise be prominent without it.</p>
                <p className='font-light text-sm absolute bottom-[10%] left-[40%] last-text'>Look the best on all your occasion</p>
            </div>
            <div className='services grid lg:grid-cols-3 md:grid-cols-1 gap-4 mx-auto w-4/5'>
                {
                    services.map(service => <ServicesHomePage
                        key={service._id}
                        service={service}
                    ></ServicesHomePage>)
                }
            </div>
            <div className='flex justify-items-end w-4/5 mx-auto mt-4'><button className='btn btn-light text-black font-bold bg-[#fff558]'><Link to='/services'>All Services</Link> </button></div>
            <div className='p-4'>
                <TopLook></TopLook>
            </div>
            <div>
                <Analytics></Analytics>
            </div>
        </div>
    );
};

export default Home;