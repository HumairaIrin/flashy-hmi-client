import React from 'react';
import { Link } from 'react-router-dom';
import './ServicesHomePage.css'

const ServicesHomePage = ({ service }) => {
    const { serviceName, price, ratings, details, image } = service;
    return (
        <div className="card shadow-xl">
            <figure><img className=' w-full' src={image} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title text-3xl font-bold">{serviceName}</h2>
                <p className='text-sm '>{details.slice(0, 60) + '...'}<Link to='/service' className='text-[#fff558] font-bold'> See details</Link> </p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default ServicesHomePage;