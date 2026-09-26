import React from 'react';
import AppsAndSearch from './AppsAndSearch';
import { Metadata } from 'next';


export const metadata: Metadata = {
  title: "Apps | Hero.IO",
  icons:{
    icon: '/assets/logo.png'
  }
};

const AllApps = () => {
    return (
        <div className='m-20 flex flex-col justify-between items-center gap-10'>
            <div className='flex flex-col justify-center items-center gap-5'>
                <h1 className='text-5xl font-bold'>Our All Applications</h1>
                <p className='text-[#627382] text-xl font-normal'>Explore All Apps on the Market developed by us. We code for Millions</p>
            </div>
            <div className='flex flex-col justify-between items-center w-full'>
                <AppsAndSearch />
            </div>
        </div>
    );
};

export default AllApps;