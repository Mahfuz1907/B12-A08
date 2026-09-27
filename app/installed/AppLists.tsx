'use client'

import { AppContext } from '@/Components/Context/AppContext';
import React, { useContext } from 'react';
import EachApp from './EachApp';
import Link from 'next/link';
import { AppWindow } from 'lucide-react';

const AppLists = () => {
    const {installed, sortBy, setSortBy} = useContext(AppContext)

    const sortedInstalled = [...installed].sort((a, b) => {
        if(sortBy === 'size'){
            return b.size - a.size
        }

        if(sortBy === 'downloads'){
            return b.downloads - a.downloads
        }

        if(sortBy === 'rating'){
            return b.ratingAvg - a.ratingAvg
        }

        return 0
    })

    return (
        <div className='flex flex-col justify-between items-center gap-5 w-full'>
            <div className='flex flex-row justify-between items-center w-full'>
                <h2 className='text-2xl font-semibold'>{installed.length} Apps Found</h2>
                <select 
                className="select"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                >
                    <option value={'size'}>Size</option>
                    <option value={'downloads'}>Downloads</option>
                    <option value={'rating'}>Rating</option>
                </select>
            </div>
            <div className='flex flex-col justify-between items-start gap-5 w-full'>
                {
                    installed.length === 0 ? (
                    <div className="flex flex-col items-center justify-center min-h-100 w-full p-8 text-center bg-white rounded-2xl border border-dashed border-gray-200">
                        <div className="flex items-center justify-center w-20 h-20 rounded-full bg-emerald-50 mb-4">
                            <AppWindow className="w-10 h-10 text-[#00D084]" />
                        </div>

                        <h2 className="text-2xl font-bold text-slate-800 mb-2">
                         No Installed Apps Yet
                        </h2>

                        <p className="text-slate-500 max-w-md text-sm mb-6 leading-relaxed">
                            You haven&apos;t installed any applications yet. Browse through our collection of productivity tools and find the right apps for your workflow.
                        </p>

                        <Link
                            href="/apps"
                            className="bg-[#00D084] hover:bg-[#00B874] text-white font-medium px-6 py-2.5 rounded-lg transition-colors text-sm shadow-sm hover:shadow"
                        >
                            Explore Apps
                        </Link>
                    </div>
                ) : (
                    sortedInstalled.map((install) => <EachApp key={install.id} install={install} />)
                )
                }
            </div>
        </div>
    );
};

export default AppLists;