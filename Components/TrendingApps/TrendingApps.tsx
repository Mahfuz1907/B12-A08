import React from 'react';

const TrendingApps = () => {
    return (
        <div className='flex flex-col justify-between items-center gap-5 mx-20 mb-20'>
            <h1 className='text-5xl font-bold'>Trending Apps</h1>
            <p className='text-[#627382] text-xl font-normal'>Explore All Trending Apps on the Market developed by us</p>
            <div></div>
            <button className='text-white bg-blue-700 rounded-sm px-4 py-3 text-base font-semibold cursor-pointer'>Show All</button>
        </div>
    );
};

export default TrendingApps;