import React from 'react';
import AppCard from './AppCard';
import { AppPromiseTypes } from '@/type';
import Link from 'next/link';


const getData = async() => {
    const appPromise = await fetch('https://raw.githubusercontent.com/Mahfuz1907/b12-a08-api/master/db.json')
    const data = await appPromise.json()
    return data.apps
}

const TrendingApps = async() => {
    const appData = await getData()
    
    return (
        <div className='flex flex-col justify-between items-center gap-5 mx-20 mb-20'>
            <h1 className='text-5xl font-bold'>Trending Apps</h1>
            <p className='text-[#627382] text-xl font-normal'>Explore All Trending Apps on the Market developed by us</p>
            <div className='grid grid-cols-4 justify-between items-start gap-10 w-full'>
                {
                    appData.slice(0, 8).map((app:AppPromiseTypes) => <AppCard key={app.id} app={app} />)
                }
            </div>
            <Link href={'/apps'} className='text-white bg-blue-700 rounded-sm px-4 py-3 text-base font-semibold cursor-pointer'>Show All</Link>
        </div>
    );
};

export default TrendingApps;