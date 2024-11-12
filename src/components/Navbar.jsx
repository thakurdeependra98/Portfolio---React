import React from 'react'
import { Link } from 'react-scroll'
import { FaRegMessage } from "react-icons/fa6";

const Navbar = () => {
  return (
    <div>
        <nav className='max-w-screen-xl mx-auto px-10 mt-8 flex justify-between items-center'>
            <div>
                <h1 className='text-[1.2vw] text-[yellow] tracking-[1px] font-semibold'>Deependra</h1>
            </div>
            <div className='flex gap-[3vw]'>
                <Link className="menuItemList text-white cursor-pointer text-[1.2vw] pb-1">Home</Link>
                <Link className="menuItemList text-white cursor-pointer text-[1.2vw] pb-1">About</Link>
                <Link className="menuItemList text-white cursor-pointer text-[1.2vw] pb-1">Projects</Link>
                <Link className="menuItemList text-white cursor-pointer text-[1.2vw] pb-1">Contact</Link>
            </div>
            <div>
                <button className="contactButton w-[12vw] bg-white text-black rounded-full py-[0.5vw] font-semibold flex items-center justify-center gap-[0.5vw] tracking-[1px] text-[1vw]"> <FaRegMessage className='fill-black bg-transparent text-[1.2vw]' /> Contact me</button>
            </div>
        </nav>
    </div>
  )
}

export default Navbar