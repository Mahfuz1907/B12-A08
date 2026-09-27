'use client'

import { AppPromiseTypes } from '@/type';
import React, { createContext, Dispatch, ReactNode, SetStateAction, useEffect, useState } from 'react';

export interface AppContextTypes{
    searchBy: string,
    setSearchBy: Dispatch<SetStateAction<string>>,
    installed: AppPromiseTypes[],
    setInstalled: Dispatch<SetStateAction<AppPromiseTypes[]>>,
    sortBy: string,
    setSortBy: Dispatch<SetStateAction<string>>
}

export const AppContext = createContext<AppContextTypes>({
    searchBy: '', 
    setSearchBy: () => {},
    installed: [],
    setInstalled: () => {},
    sortBy: 'size',
    setSortBy: () => {}
})

const AppProvider = ({children}: {children: ReactNode}) => {

    const [searchBy, setSearchBy] = useState<string>('')
    const [sortBy, setSortBy] = useState<string>('size')
    const [installed, setInstalled] = useState<AppPromiseTypes[]>(()=> {
        if (typeof window !== 'undefined'){
            const save = localStorage.getItem('hero_installed')
            return save ? JSON.parse(save) : []
        }

        return []
    })

    useEffect(() => {
        localStorage.setItem('hero_installed', JSON.stringify(installed))
    }, [installed])

    const sharedData = {
        searchBy,
        setSearchBy,
        installed, 
        setInstalled,
        sortBy,
        setSortBy
    }

    return (
        <AppContext.Provider value={sharedData}>
            {children}
        </AppContext.Provider>
    );
};

export default AppProvider;