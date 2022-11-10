import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Contexts/AuthProvider';
import MyReview from '../MyReview/MyReview';
import toast from 'react-hot-toast';
import useTitle from '../../hooks/useTitle';

const MyReviews = () => {
    useTitle('My Reviews');
    const { user } = useContext(AuthContext);
    const [myReviews, setMyReviews] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/myReviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setMyReviews(data))
            .catch(error => console.error(error))
    }, [user?.email])

    const handleDelete = (_id) => {
        const agree = window.confirm('Are you sure you want to delete this review?');
        if (agree) {
            fetch(`http://localhost:5000/myReview/${_id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        toast.error("Review Deleted Successfully")
                        const remainingReviews = myReviews.filter(review => review._id !== _id);
                        setMyReviews(remainingReviews)
                    }
                })
                .catch(error => console.error(error))
        }
    }

    return (
        <div>
            <h2 className='text-3xl mt-12 font-bold text-center text-[#fff558]'>All Your Reviews!</h2>
            <div className='mt-4 w-3/5 mx-auto bg-[#ffffff1c] rounded-lg p-4 mb-12'>
                {
                    (myReviews.length === 0) ?
                        <h2 className='text-2xl font-semibold'>No reviews to show</h2>
                        :
                        <>
                            {
                                myReviews.map(myReview => <MyReview
                                    key={myReview._id}
                                    myReview={myReview}
                                    handleDelete={handleDelete}
                                ></MyReview>)
                            }
                        </>
                }
            </div>
        </div>
    );
};

export default MyReviews;