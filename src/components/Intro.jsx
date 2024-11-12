import React from 'react'
import { Link } from 'react-scroll'
import Resume from '../assets/Deependra resume .pdf'
// import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { MdOutlineFileDownload } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const Intro = () => {
  return (
    <div className='max-w-screen-xl mx-auto px-10'>
      <div className="intro md:w-[50vw] md:h-[40vw] w-[20vw] flex justify-center flex-col">
        <h2 className='text-[1.8vw] tracking-[1px] mb-2' >Hello,</h2>
        <h1 className='text-[4vw] tracking-[1px] font-bold leading-none mb-3'>I'm <span className='text-[yellow]'>Deependra Singh </span>Web Developer</h1>
        <p className='text-[1vw] tracking-[1px] leading-none'>I'm a full-stack developer with a passion for creating engaging and user-centric experiences.</p>
        <div className='mt-10 flex items-center gap-[2vw]'>
          <a href={Resume} download='Resume' ><button className='contactButton w-[12vw] bg-white text-black rounded-full py-[0.5vw] font-semibold tracking-[1px] flex items-center justify-center gap-[0.5vw] text-[1vw] '>Download CV <MdOutlineFileDownload className='fill-black bg-transparent text-[1.5vw]' /></button></a>
          <a href="https://github.com/thakurdeependra98" className='bg-white p-[0.5vw] rounded-full'><FaGithub className='fill-black bg-transparent text-[1.5vw]'  /></a>
          <a href="https://www.linkedin.com/in/deependra-singh-5b9574244/" className='bg-white p-[0.5vw] rounded-full'><FaLinkedinIn className='fill-black bg-transparent text-[1.5vw]'  /></a>
        </div>
      </div>
    </div>
  )
}

export default Intro