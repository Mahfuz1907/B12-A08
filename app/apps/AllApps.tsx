'use client'

import { AppContext } from '@/Components/Context/AppContext';
import AppCard from '@/Components/TrendingApps/AppCard';
import { AppPromiseTypes } from '@/type';
import React, { useContext } from 'react';

export interface AllAppsTypes{
    appData: AppPromiseTypes[]
}

const AllApps = ({appData}: AllAppsTypes) => {
    const {searchBy} = useContext(AppContext)

    const filteredApps = appData.filter((app) => {
        const query = searchBy.toLowerCase().trim()
        if(!query) return true

        const match = app.title.toLowerCase().includes(query)

        return match
    })

    return filteredApps.length === 0 ? (
                <div className='py-16 text-center text-[#8a92a0] font-inter text-2xl border border-dashed border-[#ffffff1a] rounded-xl w-full'>
                    No Apps match &quot;{searchBy}&quot;
                </div>
            ) : (
        <div className='grid grid-cols-4 justify-between items-start gap-10 w-full'>
            {
                filteredApps.map((app:AppPromiseTypes) => <AppCard key={app.id} app={app} />)
            }
        </div>
    );
};

export default AllApps;