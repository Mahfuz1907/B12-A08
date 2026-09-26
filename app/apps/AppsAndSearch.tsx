import AppCard from '@/Components/TrendingApps/AppCard';
import { AppPromiseTypes } from '@/type';
import React from 'react';

const getData = async() => {
    const appPromise = await fetch('https://raw.githubusercontent.com/Mahfuz1907/b12-a08-api/master/db.json')
    const data = await appPromise.json()
    return data.apps
}

const AppsAndSearch = async() => {
    const appData = await getData()

    return (
        <div className='w-full flex flex-col justify-between items-center gap-10'>
            <div className='flex flex-row justify-between items-center w-full'>
                <h2 className='text-2xl font-semibold'>(132) Apps Found</h2>
                <div>
                <label className="input">
                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g
                        strokeLinejoin="round"
                        strokeLinecap="round"
                        strokeWidth="2.5"
                        fill="none"
                        stroke="currentColor"
                        >
                            <circle cx="11" cy="11" r="8"></circle>
                            <path d="m21 21-4.3-4.3"></path>
                        </g>
                    </svg>
                    <input type="search" required placeholder="Search" />
                </label>
                </div>
            </div>
            <div className='grid grid-cols-4 justify-between items-start gap-10 w-full'>
                {
                    appData.map((app:AppPromiseTypes) => <AppCard key={app.id} app={app} />)
                }
            </div>
        </div>
    );
};

export default AppsAndSearch;