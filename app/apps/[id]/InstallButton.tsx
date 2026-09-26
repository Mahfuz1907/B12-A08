'use client'

import { AppContext } from '@/Components/Context/AppContext';
import { AppPromiseTypes } from '@/type';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';
import './id.css'

export interface AppDetailsButtonTypes{
    app: AppPromiseTypes
}

const InstallButton = ({app}: AppDetailsButtonTypes) => {
    const {installed, setInstalled} = useContext(AppContext)

    const isInstalled = installed.some((item) => item.id === app.id)

    const handleInstallButton = (item:AppPromiseTypes) => {

        if(!isInstalled) {
            const afterAdd = [...installed, item]
            setInstalled(afterAdd)
            toast.success(`${item.title} installed successfully`)
        }else{
            toast.error(`${item.title} is already installed`)
        }
    }

    return (
        <button
        aria-disabled={isInstalled}
        onClick={() => handleInstallButton(app)} 
        className={`${isInstalled ? 'button-disable' : ''} bg-[#00D084] hover:bg-[#00B874] text-white font-medium px-6 py-2.5 rounded-lg transition-colors cursor-pointer text-sm`}>
            {
                isInstalled ? 'Installed' : `Install Now ({app.size} MB)`
            }
        </button>
    );
};

export default InstallButton;