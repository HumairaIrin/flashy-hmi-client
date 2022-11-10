import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import useTitle from '../../hooks/useTitle';
import Review from '../Review/Review';
import { AuthContext } from '../Contexts/AuthProvider';
import toast from 'react-hot-toast';

const ServiceDetails = () => {
    useTitle('Service Details');
    const { user } = useContext(AuthContext);

    const service = useLoaderData();
    const { serviceName, price, details, image, _id } = service;

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/reviews/${_id}`)
            .then(res => res.json())
            .then(data => setReviews(data))
            .catch(error => console.error(error))
    }, [_id]);

    const handleAddReview = (event) => {
        event.preventDefault();
        const form = event.target;
        const review = event.target.review.value;

        const newReview = {
            userImage: user?.image || 'not found',
            userName: user?.displayName,
            userEmail: user?.email,
            reviewText: review,
            serviceId: _id,
            serviceName: serviceName,
            date: new Date()
        }
        fetch('http://localhost:5000/review', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newReview)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Review Added');
                    const allReviews = [...reviews, newReview];
                    setReviews(allReviews)
                    form.reset();
                }
            })
            .catch(error => console.error(error))

        form.reset();
    }

    return (
        <div className='mt-10'>
            <h2 className='text-xl text-center font-bold'>Details for: <span className='text-3xl  text-[#fff558] font-bold'> {serviceName}</span></h2>
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
                    <div><button className='btn text-black font-bold border-0 bg-[#fff558]'>Purchase</button></div>
                </div>
            </div>
            <div className='mt-9 w-3/5 mx-auto bg-[#ffffff1c] rounded-lg p-4 mb-12'>
                <h2 className='text-3xl font-bold'>Reviews</h2>
                <>
                    {
                        reviews.map(review => <Review
                            key={review._id}
                            review={review}
                        ></Review>)
                    }
                </>
                {
                    user?.email ?
                        <div className='max-w-[40%] p-3 mt-6'>
                            <form onSubmit={handleAddReview}>
                                <div className="form-control">
                                    <input type="text" placeholder="Add your review" name='review' className="input input-bordered bg-[#ffffffe0] text-black " required />
                                    <button type='submit' className='btn btn-ghost w-2/5 mt-2 font-bold bg-[#fff45880]'>Add</button>
                                </div>
                            </form>
                        </div>
                        :
                        <p className='text-xl  p-3 mt-6'>Please <Link to='/login' className='font-extrabold'>Login</Link> to add review</p>
                }
            </div>
        </div>
    );
};

export default ServiceDetails;