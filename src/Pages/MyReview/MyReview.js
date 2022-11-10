import React from 'react';

const MyReview = ({ myReview, handleDelete }) => {
    const { userImage, userName, reviewText, serviceName, _id } = myReview;


    return (
        <div className='p-4 mb-3 card rounded-lg'>
            <div className='flex items-center'>
                <img className='w-[3em] h-[3em] rounded-full' src={userImage} alt="" />
                <p className='md:text-xl text-[15px] font-bold ml-4'>{userName}</p>
            </div>
            <p className='text-[16px] mt-2 w-[85%] mx-auto'>your review was for: <span className='text-[17px] font-bold'>{serviceName}</span></p>
            <p className='text-sm w-[85%] mx-auto'>{reviewText}</p>
            <div className='flex justify-end'>
                <button className='btn btn-dark'>Edit</button>
                <button onClick={() => handleDelete(_id)} className='ml-2 btn btn-dark'>Delete</button>
            </div>
        </div>
    );
};

export default MyReview;