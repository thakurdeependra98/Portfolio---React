import React, { useState } from 'react'
import Aboutdetails from './Aboutdetails'

const About = () => {
    const [enter, setenter] = useState("")

    const handleDetailsEnter = (e) => {
        setenter(e.target.innerHTML)
      console.log(enter);
      
    }
    
    const handleDetailsLeave = () => {
      setenter(e.target.innerHTML)
      console.log(enter);
    }

    //Experince of Data
    const experience = {
      title: 'My experience',
      items:[
        {
          companyName:'CRTD Technologies',
          position:'Frontend Developer Intern',
          duration:'Jun 2024 - July 2024'
        }
      ]

    }

    //Education of dat
    const education = {
      title: 'My education',
      items:[
        {
          institutionName:'Bhabha University',
          degree:'Master of Computer Application',
          duration:'2022 - 2024'
        },
        {
          institutionName:'Sheryians Coding School',
          degree:'Full Stack Development',
          duration:'2023 - 2024'
        },
        {
          institutionName:'Barkatulaah University',
          degree:'Bachelor of Science',
          duration:'2017 - 2020'
        }
      ]
    }

  return (
    <div className='md:max-w-screen-xl md:h-[45vw] flex flex-col items-center mx-auto px-10 py-[3vw]'>
        <div className='text-center '>
            <h1 className='md:text-[4vw] text-[10vw] tracking-[1px] font-bold leading-none mb-5'> <span className='text-[yellow]'>Who</span> i'm</h1>
            {/* <p className='md:text-[1vw] text-[4vw] tracking-[1px] text-zinc-400'>"Enthusiastic full-stack web developer with a strong command of the MERN stack—React.js, Node.js, Express.js, and MongoDB. Known for creating efficient, responsive, and user-focused applications, I bring a balance of technical skill and creativity to every project, ensuring robust back-end functionality and dynamic front-end experiences</p> */}
        </div>
        <div className='md:w-[70vw] md:h-[25vw] flex mt-[3vw]'>
          <div className='aboutlist w-[30vw] h-[30vw] flex flex-col items-left justify-start gap-[1vw] py-[2vw]'>
            <h2 className='w-[15vw] md:text-[1.5vw] text-[6vw] text-black bg-white tracking-[1px] rounded-full mb-2 px-5 py-[0.2vw]'
            // onMouseEnter={(index) => setShowDetails(index.target.value)}
            onMouseEnter={(e)=>handleDetailsEnter(e)} >
              Experience
              </h2>
            <h2  onMouseEnter={(e)=>handleDetailsEnter(e)}  className='w-[15vw] md:text-[1.5vw] text-[6vw] tracking-[1px] rounded-full mb-2 px-5 py-[0.2vw]' value="Education">Education</h2>
            <h2  onMouseEnter={(e)=>handleDetailsEnter(e)} className='w-[15vw] md:text-[1.5vw] text-[6vw] tracking-[1px] rounded-full mb-2 px-5 py-[0.1vw] ' value="Skills">Skills</h2>
          </div>
          <div className='w-full h-[25vw] rounded-lg px-[1vw] py-[1vw]'>
            {/* <div className='' value="Experince"></div> */}
            <Aboutdetails Enter={enter}/>
          </div>
        </div>
    </div>
  )
}

export default About