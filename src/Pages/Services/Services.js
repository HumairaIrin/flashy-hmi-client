import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';
import ServicesHomePage from '../ServicesHomePage/ServicesHomePage';

const Services = () => {
    useTitle('Services');
    const services = useLoaderData();
    // const { serviceName, price, ratings, details, image, _id } = services;
    return (
        <div className='mb-16'>
            <h4 className='text-5xl font-bold mt-9 text-center'>All Services</h4>
            <div className='services grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 mt-6 mx-auto w-4/5'>
                {
                    services.map(service => <ServicesHomePage
                        key={service._id}
                        service={service}
                    ></ServicesHomePage>)
                }
            </div>
        </div>
    );
};

export default Services;