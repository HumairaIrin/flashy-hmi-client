import React from 'react';

const Analytics = () => {
    return (
        <section className="body-font">
            <div className="container px-5 py-24 mx-auto bg-[#ffffff17] rounded-lg mb-20">
                <div className="flex flex-wrap -m-4 text-center">
                    <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                        <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                            <h2 className="title-font font-medium text-3xl text-white">2k+</h2>
                            <p className="leading-relaxed text-">Reviews</p>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                        <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                            <h2 className="title-font font-medium text-3xl text-white">500+</h2>
                            <p className="leading-relaxed">Clients</p>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                        <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                            <h2 className="title-font font-medium text-3xl text-white">%</h2>
                            <p className="leading-relaxed">A lot of discounts</p>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                        <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                            <h2 className="title-font font-medium text-3xl text-white">#</h2>
                            <p className="leading-relaxed">Customization</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Analytics;