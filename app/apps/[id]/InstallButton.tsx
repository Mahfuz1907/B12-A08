import { AppPromiseTypes } from '@/type';
import React from 'react';

export interface AppDetailsButtonTypes{
    app: AppPromiseTypes
}

const InstallButton = ({app}: AppDetailsButtonTypes) => {
    return (
        <button className="bg-[#00D084] hover:bg-[#00B874] text-white font-medium px-6 py-2.5 rounded-lg transition-colors cursor-pointer text-sm">
            Install Now ({app.size} MB)
        </button>
    );
};

export default InstallButton;