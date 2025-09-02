import React from 'react'
import logo from '../assets/LOGOdark.svg'

function Navbar() {
  return (
    <nav className='w-full h-11 flex items-center justify-between bg-[#121212] text-white'> 
        <div >
            <img src={logo} alt='TUNENEST' className='w-34 h-34'/>
        </div>

        <div className='border border-white rounded-full w-150 h-8'>
            <input type="text" />
            <button></button>
        </div>

        <div>
            icons
        </div>
    </nav>
  )
}

export default Navbar