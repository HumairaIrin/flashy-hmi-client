import React from 'react';

const Review = ({ review }) => {
    const { userImage, userName, reviewText } = review;
    return (
        <>
            <div className='p-4 mb-3 card rounded-lg'>
                <div className='flex items-center'>
                    <img className='w-[3em] h-[3em] rounded-full' src={userImage} alt="" />
                    <p className='md:text-xl text-[15px] font-bold ml-4'>{userName}</p>
                </div>
                <p className='text-sm w-[85%] mt-2 mx-auto'>{reviewText}</p>
            </div>
        </>
    );
};

export default Review;