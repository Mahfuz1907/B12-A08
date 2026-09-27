import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const PageNotFound = () => {
    return (
        <div className="flex min-h-[70vh] w-full flex-col items-center justify-center px-4 py-12 text-center bg-[#F8FAFC]">
            <div className="relative mb-6 h-64 w-64 max-w-full sm:h-80 sm:w-80">
                <Image
                src="/assets/error-404.png" 
                alt="404 Page Not Found"
                fill
                className="object-contain"
                 priority
                />
            </div>

            <h1 className="text-3xl font-extrabold tracking-tight text-[#0F172A] sm:text-4xl">
                Oops, page not found!
            </h1>

            <p className="mt-2 text-sm font-medium text-slate-400 sm:text-base">
                The page you are looking for is not available.
            </p>

            <Link
                href="/"
                className="mt-6 rounded-lg bg-[#8B5CF6] px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-[#7C3AED] hover:shadow-md active:scale-95"
            >
                Go Back!
            </Link>
        </div>
    );
};

export default PageNotFound;