import React from 'react'

const Navbar = () => {
  return (
    <div className='flex flex-row justify-between items-center  w-full h-[100px] relative px-8 bg-[#EDE9DE] mt-2 rounded-md drop-shadow-md '>
      {/* <div className='w-[50%] h-full text-[20px] font-bold flex items-center justify-start font-textFont  text-green-700'>
        <span>KAKHI MTCHEDLURI</span> 
      </div> */}
      {/* LOGO */}
      {/* <div className='w-[50px] h-[50px] relative perspect-none transform-style-preserve-3d '>
        <div className='w-[50px] h-[50px] bg-yellow-500 flex justify-between items-center border-4 border-black absolute rotate-y-45 translate-z-0 '>kaxii</div>
        



    </div> */}
      <div className='w-[50%] h-[100px] '>
      <ul className='flex flex-row h-full w-full justify-between items-center font-extrabold uppercase text-[14px] invisible md:visible'>
        <li><a className='w-[110px] h-[50px] rounded-md font-textFont flex justify-center items-center
         hover:rotate-12 hover:bg-[#ECC73B] hover:italic duration-500 hover:text-[16px] hover:drop-shadow-2xl' href="#about-me">About Me</a></li>
         <li><a className='w-[100px] h-[50px] rounded-md font-textFont flex justify-center items-center
         hover:rotate-12 hover:bg-[#ECC73B] hover:italic duration-500 hover:text-[16px] hover:drop-shadow-2xl' href="#skills">skills</a></li>
         <li><a className='w-[100px] h-[50px] rounded-md font-textFont flex justify-center items-center
         hover:rotate-12 hover:bg-[#ECC73B] hover:italic duration-500 hover:text-[16px] hover:drop-shadow-2xl' href="#projects">projects</a></li>
         <li><a className='md:w-[110px] md:h-[50px] rounded-md font-textFont flex justify-center items-center
         hover:rotate-12 hover:bg-[#ECC73B]  hover:italic duration-500 hover:text-[14px] hover:drop-shadow-2xl' href="#contact-me">contact Me</a></li>
      </ul>   
      </div>
    </div>
  )
}

export default Navbar