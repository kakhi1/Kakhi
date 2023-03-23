import React from 'react'

const Navbar = () => {
  return (
    <div className='flex flex-row justify-between items-center  w-full h-[100px] relative px-8 bg-[#D5D3C1]'>
      <div className='w-[50%] h-full text-[20px] font-bold flex items-center justify-start font-textFont  text-green-700'>
        <span>KAKHI MTCHEDLURI</span> 
      </div>
      <div className='w-[50%] h-[100px] '>
      <ul className='flex flex-row h-full w-full justify-between items-center font-extrabold uppercase text-[14px]'>
        <div className='w-[100px] h-[50px] rounded-md font-textFont flex justify-center items-center
         hover:rotate-45 hover:bg-white' ><li className='hover:italic'><a href="#about-me">About Me</a></li></div>
        <div className='w-[100px] h-[50px] rounded-md flex justify-center items-center
         hover:rotate-45 hover:bg-white font-textFont'><li><a href="#skills">Skills</a></li></div>
        <div className='w-[100px] h-[50px] rounded-md flex justify-center items-center
         hover:rotate-45 hover:bg-white font-textFont '><li><a href="#projects">Projects</a></li></div>
        <div className='w-[100px] h-[50px] rounded-md flex justify-center items-center text-green-700 font-textFont
         hover:rotate-45 hover:bg-white '><li><a href="#contact-me">Contact Me</a></li></div>
      </ul>   
      </div>
    </div>
  )
}

export default Navbar