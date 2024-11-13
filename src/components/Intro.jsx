import React from 'react'
import { Link } from 'react-scroll'
import Resume from '../assets/Deependra resume .pdf'
// import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { MdOutlineFileDownload } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import Profile from "../assets/laptop.webp"

const Intro = () => {
  return (
    <div className='md:max-w-screen-xl md:h-[45vw] flex items-center justify-center mx-auto px-10'>
      <div className="intro md:w-[50vw] md:h-[45vw] w-[85vw] h-[85vh] flex md:justify-center justify-end flex-col md:static absolute top-[0v] left-[10vw]">
        <h2 className='md:text-[1.8vw] text-[6vw] tracking-[1px] mb-2' >Hello,</h2>
        <h1 className='md:text-[4vw] text-[10vw] tracking-[1px] font-bold leading-none mb-3'>I'm <span className='text-[yellow]'>Deependra Singh  <br /> </span>Web Developer</h1>
        <p className='md:text-[1vw] text-[4vw] tracking-[1px] leading-none'>I'm a full-stack Web developer with a passion for creating engaging and user-centric experiences.</p>
        <div className='mt-10 flex items-center md:gap-[2vw] gap-[8vw]'>
          <a href={Resume} download='Resume' ><button className='contactButton md:w-[12vw] w-[45vw] bg-white text-black rounded-full py-[0.5vw] font-semibold tracking-[1px] flex items-center justify-center gap-[0.5vw] md:text-[1vw] text-[4vw]'>Download CV <MdOutlineFileDownload className='fill-black bg-transparent md:text-[1.5vw] text-[5vw]' /></button></a>
          <a href="https://github.com/thakurdeependra98" className='bg-white md:p-[0.5vw] p-[1vw] rounded-full'><FaGithub className='fill-black bg-transparent md:text-[1.5vw] text-[5vw]' 
          /></a>
          <a href="https://www.linkedin.com/in/deependra-singh-5b9574244/" className='bg-white md:p-[0.5vw] p-[1vw] rounded-full'><FaLinkedinIn className='fill-black bg-transparent md:text-[1.5vw] text-[5vw]'  /></a>
        </div>
      </div>
      <div className='image md:w-[40vw] w-screen md:h-[45vw] h-[90vh] flex md:items-center md:justify-end mix-blend-lighten'>
          <img className='md:h-[35vw] h-[80vh] opacity-30 md:opacity-100' src={Profile} alt="" />
      </div>
    </div>
  )
}

export default Intro