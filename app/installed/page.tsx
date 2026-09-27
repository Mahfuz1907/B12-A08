import React from 'react';
import AppLists from './AppLists';
import { Metadata } from 'next';


export const metadata: Metadata = {
  title: "Your Install | Hero.IO",
  icons:{
    icon: '/assets/logo.png'
  }
};

const InstalledApps = () => {
    return (
        <div className='m-20 flex flex-col justify-between items-center gap-10'>
            <div className='flex flex-col justify-between items-center gap-5'>
                <h1 className='text-5xl font-bold'>Your Installed Apps</h1>
                <p className='text-[#627382] text-xl font-normal'>Explore All Trending Apps on the Market developed by us</p>
            </div>
            <div className='w-full'>
                <AppLists />
            </div>
        </div>
    );
};

export default InstalledApps;