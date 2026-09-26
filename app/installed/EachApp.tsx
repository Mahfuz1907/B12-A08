'use client';

import Image from 'next/image';
import { Download, Star } from 'lucide-react';
import { AppPromiseTypes } from '@/type';
import React, { useContext } from 'react';
import { AppContext } from '@/Components/Context/AppContext';
import { toast } from 'react-toastify';


const formatDownloads = (count: number) => {
  if (!count) return '0';
  if (count >= 1000000) return `${(count / 1000000).toFixed(0)}M`;
  if (count >= 1000) return `${(count / 1000).toFixed(0)}K`;
  return count.toString();
};

export interface InstalledAppType{
    install: AppPromiseTypes,
}

const EachApp = ({install}: InstalledAppType) => {
    const {installed, setInstalled} = useContext(AppContext)

    const handleUninstall = (item:AppPromiseTypes) => {
        const afterdel = installed.filter((item) => item.id !== install.id)
        setInstalled(afterdel)
        toast.success(`${item.title} uninstalled successfully`)
    }

    return (
        <div className="w-full flex items-center justify-between bg-white rounded-lg p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <div className="flex items-center gap-4">
        <div className="relative h-14 w-14 overflow-hidden rounded-lg bg-gray-200 shrink-0">
          <Image
            src={install.image}
            alt={install.title}
            fill
            className="object-cover"
          />
        </div>

        <div className="flex flex-col gap-1">
          <h3 className="font-semibold text-slate-900 text-base line-clamp-1">
            {install.title}
          </h3>

          <div className="flex items-center gap-3 text-xs font-medium">
            <span className="flex items-center gap-1 text-emerald-500">
              <Download className="h-3.5 w-3.5" />
              {formatDownloads(install.downloads)}
            </span>

            <span className="flex items-center gap-1 text-amber-500">
              <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
              {install.ratingAvg}
            </span>

            <span className="text-gray-400">
              {install.size} MB
            </span>
          </div>
        </div>
      </div>

      <button
        onClick={() => handleUninstall(install)}
        className="bg-[#00D084] hover:bg-[#00B874] text-white font-medium px-5 py-2 rounded-md text-sm transition-colors cursor-pointer"
      >
        Uninstall
      </button>
    </div>
    );
};

export default EachApp;