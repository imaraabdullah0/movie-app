import React from 'react';
// import { IconName } from "react-icons/fa";


const Navbar = () => {
  return (
    <div className='bg-black text-rose-700 flex justify-between w-full h-[50px] items-center z-10 p-2'>
      <h1 className='hover:text-rose-800 hover:translate-x-1 text-4xl font-extrabold cursor-pointer drop-shadow-2xl-white'>HITFLEX</h1>
      <div className=''>
        <button className=' text-white font-bold px-4 py-1 text-center hover:text-red-500 text-sm mr-1'>Sign In</button>
        <button className='border border-red-700 bg-red-700 hover:bg-red-500 text-white font-bold rounded-lg px-4 py-1 text-center text-sm mr-1'>Sign Up</button>
      </div>
    </div>
  )
}

export default Navbar