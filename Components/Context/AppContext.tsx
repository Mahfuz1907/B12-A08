'use client'

import React, { createContext, Dispatch, ReactNode, SetStateAction, useState } from 'react';

export interface AppContextTypes{
    searchBy: string,
    setSearchBy: Dispatch<SetStateAction<string>>
}

export const AppContext = createContext<AppContextTypes>({
    searchBy: '', 
    setSearchBy: () => {}
})

const AppProvider = ({children}: {children: ReactNode}) => {

    const [searchBy, setSearchBy] = useState<string>('')

    const sharedData = {
        searchBy,
        setSearchBy
    }

    return (
        <AppContext.Provider value={sharedData}>
            {children}
        </AppContext.Provider>
    );
};

export default AppProvider;