import React from 'react';
import logo from '../assets/LOGOdark.svg';
import { Search, Moon, Sun, User } from "lucide-react";

function Navbar() {
  return (
    <nav className='w-full h-11 flex items-center justify-between bg-[#121212] text-white'> 
        <div >
            <img src={logo} alt='TUNENEST' className='w-34 h-34'/>
        </div>

        <div className='border border-white rounded-full w-150 h-8 px-3 flex justify-between items-center gap-2'>
            <input type="text" placeholder='Search Song Here' />

            <div>
            <button aria-label="Search" className=''><Search size={15} /></button>
            </div>
        </div>

        <div className='flex border-indigo-500 mr-4 justify-center items-center gap-4'>
            <button aria-label="Toggle theme"><Moon size={20} /></button>
            <button aria-label="Toggle theme"><Sun size={20} /></button>
            <button aria-label="Profile"><User size={22} /></button>
        </div>
    </nav>
  )
}

export default Navbar