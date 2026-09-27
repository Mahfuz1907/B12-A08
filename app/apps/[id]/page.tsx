import { Download, MessageSquare, Star } from 'lucide-react';
import Image from 'next/image';
import React from 'react';
import InstallButton from './InstallButton';
import AppReviewChart from './AppReviewChart';
import { notFound } from 'next/navigation';

export interface AppDetailsTypes{
    params: Promise<{
        id: string
    }>
}


const getData = async() => {
  try{
    const response = await fetch('https://raw.githubusercontent.com/Mahfuz1907/b12-a08-api/master/db.json')
    if(!response) return null
    const data = await response.json()
    return data
  }catch{
    return null
  }
}


export async function generateMetadata ({params}:AppDetailsTypes){
    const {id} = await params
    const appData = await getData()
    const app = appData.apps[Number(id) - 1]

    if(!app){
        return {
            title: 'App Not Found | Hero.IO',
            icons:{
                icon: '/assets/logo.png'
            }
        }
    }

    return {
        title: `${app.title} | Hero.IO`,
        icons:{
            icon: '/assets/logo.png'
        }
    } 
}

const formatNumber = (count: number) => {
  if (count >= 1000000) return `${(count / 1000000).toFixed(0)}M`;
  if (count >= 1000) return `${(count / 1000).toFixed(0)}K`;
  return count.toString();
};

const AppDetails = async({params}: AppDetailsTypes) => {
    const {id} = await params
    const appData = await getData()
    const app = appData.apps[Number(id) - 1]

    if(!app){
      notFound()
    }


    return (
        <div className="m-20 px-6 py-12 text-[#1E293B]">
      <div className="flex flex-col sm:flex-row items-start gap-8 pb-8 border-b border-gray-200">
        <div className="relative w-44 h-44 rounded-3xl overflow-hidden border border-gray-100 shadow-sm shrink-0 bg-gray-50">
          <Image
            src={app.image}
            alt={app.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="flex flex-col gap-4">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">{app.title}</h1>
            <p className="text-sm text-slate-500 mt-1">
              Developed by{" "}
              <span className="text-indigo-600 font-medium">
                {app.companyName || "productive.io"}
              </span>
            </p>
          </div>

          <div className="flex items-center gap-8 py-2">
            <div className="flex flex-col">
              <span className="text-xs text-slate-400 font-medium flex items-center gap-1">
                <Download className="w-3.5 h-3.5 text-emerald-500" /> Downloads
              </span>
              <span className="text-2xl font-bold text-slate-900">
                {formatNumber(app.downloads)}
              </span>
            </div>

            <div className="flex flex-col">
              <span className="text-xs text-slate-400 font-medium flex items-center gap-1">
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" /> Average Ratings
              </span>
              <span className="text-2xl font-bold text-slate-900">
                {app.ratingAvg}
              </span>
            </div>

            <div className="flex flex-col">
              <span className="text-xs text-slate-400 font-medium flex items-center gap-1">
                <MessageSquare className="w-3.5 h-3.5 text-indigo-500" /> Total Reviews
              </span>
              <span className="text-2xl font-bold text-slate-900">
                {formatNumber(app.reviews)}
              </span>
            </div>
          </div>

          <div>
            <InstallButton app={app} />
          </div>
        </div>
      </div>

      <div className="py-8 border-b border-gray-200">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Ratings</h2>
        <AppReviewChart ratings={app.ratings} />
      </div>

      <div className="py-8">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Description</h2>
        <div className="text-slate-600 space-y-6 leading-relaxed">
          <p>{app.description}</p>
        </div>
      </div>
    </div>
    );
};

export default AppDetails;