import React from 'react';
import Search from './Search';
import AllApps from './AllApps';

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
                <h2 className='text-2xl font-semibold'>({appData.length}) Apps Found</h2>
                <Search />
            </div>
            <AllApps appData={appData} />
        </div>
    );
};

export default AppsAndSearch;