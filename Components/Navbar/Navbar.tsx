import Image from 'next/image';
import React from 'react';
import './Navbar.css'
import { FaGithub } from 'react-icons/fa';
import Link from 'next/link';

const Navbar = () => {
    return (
        <div className='sticky z-50 top-0 bg-white px-20 py-4 flex flex-row justify-between items-center border border-[#e9e9e9]'>
            <Link href={'/'} className='flex flex-row justify-between items-center gap-1'>
                <Image src={'/assets/logo.png'} alt='logo' width={40} height={40} />
                <h1 className='text-base font-bold'>Hero.IO</h1>
            </Link>
            <ul className='flex flex-row justify-between items-center gap-3'>
                <li className='active'>Home</li>
                <li className='inactive'>Apps</li>
                <li className='inactive'>Installation</li>
            </ul>
            <a href='https://github.com/Mahfuz1907' target='blank' className='contribute-button'><FaGithub />Contribute</a>
        </div>
    );
};

export default Navbar;