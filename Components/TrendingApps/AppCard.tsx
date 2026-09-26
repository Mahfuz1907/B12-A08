import { AppPromiseTypes } from '@/type';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Download, Star } from "lucide-react";

export interface AppCardType{
    app: AppPromiseTypes
}

const formatDownloads = (count: number) => {
  if (count >= 1000000) return `${(count / 1000000).toFixed(0)}M`;
  if (count >= 1000) return `${(count / 1000).toFixed(0)}K`;
  return count.toString();
};

const AppCard = ({app}: AppCardType) => {
    console.log(app)
    return (
        <Link
        href={`/apps/${app.id}`}
        className="group flex flex-col justify-between overflow-hidden rounded-2xl bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl border border-gray-100"
        >
      <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-gray-100">
        <Image
          src={app.image}
          alt={app.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="mt-3 flex flex-col gap-2">
        <h3 className="line-clamp-1 font-semibold text-gray-800 transition-colors group-hover:text-emerald-600">
          {app.title}
        </h3>

        <div className="flex items-center justify-between text-xs">
          <span className="flex items-center gap-1 rounded-md bg-emerald-50 px-2 py-1 font-medium text-emerald-600">
            <Download className="h-3.5 w-3.5" />
            {formatDownloads(app.downloads)}
          </span>

          <span className="flex items-center gap-1 rounded-md bg-amber-50 px-2 py-1 font-semibold text-amber-600">
            <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
            {app.ratingAvg}
          </span>
        </div>
      </div>
    </Link>
    );
};

export default AppCard;