import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import useTitle from '../../hooks/useTitle';
import Review from '../Review/Review';

const ServiceDetails = () => {
    useTitle('Service Details');
    const service = useLoaderData();
    const { serviceName, price, details, image, _id } = service;

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/reviews/${_id}`)
            .then(res => res.json())
            .then(data => setReviews(data))
            .catch(error => console.error(error))
    }, [_id])

    return (
        <div className='mt-10'>
            <h2 className='text-xl text-center font-bold'>Details for: <span className='text-3xl font-bold'> {serviceName}</span></h2>
            <div className="card my-14 w-4/5 mx-auto bg-base-100 shadow-xl">
                <figure className='w-4/5 max-h-[100vh] mx-auto'>
                    <PhotoProvider>
                        <PhotoView key={_id} src={image}>
                            <img className=' w-full' src={image} alt="" />
                        </PhotoView>
                    </PhotoProvider>
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{serviceName}</h2>
                    <p>{details}</p><br />
                    <p className='text-xl'>Price: <span className='font-bold'>$ {price}</span></p>
                </div>
            </div>
            <div className='mt-9 w-3/5 mx-auto bg-[#ffffff1c] rounded-lg p-4 mb-12'>
                <h2 className='text-3xl font-bold'>Reviews</h2>
                {
                    reviews.map(review => <Review
                        key={review._id}
                        review={review}
                    ></Review>)
                }
            </div>
        </div>
    );
};

export default ServiceDetails;