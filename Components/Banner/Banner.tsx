import Image from 'next/image';
import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div className='m-20 flex flex-col justify-between items-center gap-10'>
            <h1 className='text-7xl font-bold text-center'>We Build <br/> Productive Apps</h1>
            <p className='text-[#627382] text-xl font-normal text-center'>
                At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.
                Our goal is to turn your ideas into digital experiences that truly make an impact.
            </p>
            <div className='flex flex-row justify-between items-center gap-8'>
                <button className='banner-button'><Image src={'/assets/play-store.png'} alt='play-store' width={24} height={24} />Google Play</button>
                <button className='banner-button'><Image src={'/assets/app-store.png'} alt='app-store' width={24} height={24} />App Store</button>
            </div>
            <Image src={'/assets/hero.png'} alt='hero' width={800} height={800} />
        </div>
    );
};

export default Banner;