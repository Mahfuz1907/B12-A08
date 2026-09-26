'use client'

import { AppPromiseTypes } from '@/type';
import React, { createContext, Dispatch, ReactNode, SetStateAction, useState } from 'react';

export interface AppContextTypes{
    searchBy: string,
    setSearchBy: Dispatch<SetStateAction<string>>,
    installed: AppPromiseTypes[],
    setInstalled: Dispatch<SetStateAction<AppPromiseTypes[]>>
}

export const AppContext = createContext<AppContextTypes>({
    searchBy: '', 
    setSearchBy: () => {},
    installed: [],
    setInstalled: () => {}
})

const AppProvider = ({children}: {children: ReactNode}) => {

    const [searchBy, setSearchBy] = useState<string>('')
    const [installed, setInstalled] = useState<AppPromiseTypes[]>([])

    const sharedData = {
        searchBy,
        setSearchBy,
        installed, 
        setInstalled
    }

    return (
        <AppContext.Provider value={sharedData}>
            {children}
        </AppContext.Provider>
    );
};

export default AppProvider;