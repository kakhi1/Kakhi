import React from "react";

const About = () => {
  return (
    <div className="md:w-full max-h-[944px] border-black border-b-[6px] bg-white">
      <div
        className="w-full md:h-[70px] h-[40px] flex md:justify-start justify-center relative 
      border-l-[6px] border-x-[3px] md:border-x-[6px] border-black bg-yello w md:bg-white "
      >
        <div className="md:animate-wiggle flex items-center justify-start ">
          <span
            className="w-[150px] h-full  font-textFont flex justify-center items-center bg-[#ECC73b] italic md:border-r-[6px]  border-black text-[16px]
           cursor-pointer uppercase font-extrabold "
          >
            about
          </span>{" "}
        </div>
      </div>
      <div className="w-full md:h-[874px] border-black border-[6px] flex flex-row">
          {/* first columm */}
        <div className="h-full md:w-[10%] w-[0%] ">
           <div className="w-full h-[30%] bg-white" ></div>
           <div className="w-full h-[50%] bg-blue border-y-[6px] border-black"></div>
           <div className="w-full h-[20%] bg-yellow" ></div>
        </div>
          {/* second columm */}
        <div className="h-full md:w-[35%] w-[50%] border-black border-x-[6px]">
          <div className="w-full h-[15%] flex justify-center items-center">
            <div className="flex flex-col text-left h-[60%] justify-center">
             <span className="font-bold md:text-[20px] text-[16px] w-full">       
              Hi there! 
             </span>
             <span className="font-extrabold text-[16px] lg:text-[26px] w-full ">My name is <span className="text-red1 uppercase text-[16px] lg:text-[22px] lg:hover:text-[28px] duration-1000 cursor-pointer"> Kakhi Mtchedluri </span></span>
           </div>  
          </div>
          <div className="w-full h-[41%] border-y-[6px] border-black flex items-center justify-center">
           <div className="w-[80%] text-left font-medium h-full flex items-center ">
              <span>
                I'm a self-taught web developer with a strong understanding of
                HTML, CSS, JavaScript, React, Tailwind CSS, and Angular. I have
                a passion for creating beautiful and functional websites, and
                I'm constantly learning and exploring new technologies to
                improve my skills. Let's work together to turn your ideas into
                reality on the web!
              </span>
            </div>
          </div>
          <div className="w-full h-[44%]"></div>
        </div>
          {/* third columm */}
        <div className="h-full md:w-[55%] w-[50%]">
          <div className="w-full h-[10%] flex flex-row">
            <div className="w-[80%] h-full"></div>
            <div className="w-[20%] h-full bg-yellow border-black md:border-l-[6px] border-l-[3px]"></div>
          </div>
          <div className="w-full h-[60%] bg-red1 border-y-[6px] border-black"></div>
          <div className="w-full h-[30%] flex flex-row">
            <div className="w-[60%] h-full"></div>
            <div className="w-[20%] h-full bg-blue md:border-x-[6px] border-x-[3px] border-black"></div>
            <div className="w-[20%] h-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
