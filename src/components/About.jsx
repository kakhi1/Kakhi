import React from "react";
import { AiFillHtml5, AiFillDatabase, AiFillGithub } from "react-icons/ai";
import {
  DiCss3,
  DiJavascript1,
  DiReact,
  DiAngularSimple,
} from "react-icons/di";
import { SiTailwindcss } from "react-icons/si";
import { BsGit } from "react-icons/bs";

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
      <div className="w-full md:h-[874px] border-black border-[6px] flex md:flex-row flex-col">
        {/* first columm */}
        <div className="h-full md:w-[10%] w-[0%] ">
          <div className="w-full h-[30%] bg-white"></div>
          <div className="w-full h-[50%] bg-blue border-y-[6px] border-black"></div>
          <div className="w-full h-[20%] bg-yellow"></div>
        </div>
        {/* second columm */}
        <div className="h-full md:w-[35%] w-full  border-black border-x-[6px]">
          <div className="w-full h-[15%] flex justify-center items-center">
            <div className="flex flex-col text-left h-[60%] justify-center">
              <span className="font-bold md:text-[20px] text-[16px] w-full">
                Hi there!
              </span>
              <span className="font-extrabold text-[16px] lg:text-[26px] w-full ">
                My name is{" "}
                <span className="text-red1 uppercase text-[16px] lg:text-[22px] lg:hover:text-[28px] duration-1000 cursor-pointer">
                  {" "}
                  Kakhi Mtchedluri{" "}
                </span>
              </span>
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
          {/* skills section */}
          <div className="w-full h-[44%] flex flex-col p-10 ">
            <div className="w-full h-3/5 grid grid-cols-3 grid-rows-3">
              <div className="flex items-center">
                <AiFillHtml5 color="#CD190A" size={25} />{" "}
                <span className="ml-2"> HTML5 </span>
              </div>
              <div className="flex  items-center">
                <DiCss3 color="#045D97" size={25} />{" "}
                <span className="ml-2"> CSS3</span>
              </div>
              <div className="flex items-center">
                <DiJavascript1 color="#CD190A" size={25} />{" "}
                <span className="ml-2"> JAVASCRIPT </span>
              </div>
              <div className="flex items-center">
                <DiReact color="#045D97" size={25} />{" "}
                <span className="ml-2"> React </span>
              </div>
              <div className="flex items-center">
                <DiAngularSimple color="#CD190A" size={25} />{" "}
                <span className="ml-2"> Angular</span>
              </div>
              <div className="flex items-center">
                <SiTailwindcss color="#045D97" size={25} />{" "}
                <span className="ml-2"> Tailwind CSS </span>
              </div>
              <div className="flex items-center">
                <AiFillGithub size={25} />{" "}
                <span className="ml-2"> GitHub </span>
              </div>
              <div className="flex  items-center">
                <BsGit color="#CD190A" size={25} />{" "}
                <span className="ml-2"> GIT</span>
              </div>
              <div className="flex items-center">
                <AiFillDatabase color="#045D97" size={25} />{" "}
                <span className="ml-2"> MangoDB </span>
              </div>
            </div>
            <div className="w-full h-1/5 text-left flex items-center font-medium">
              <h1>Knowledge of responsive design principles</h1>
            </div>
            <div className="w-full h-1/5 text-left flex items-center font-medium ">
              <h1>Eager to continue learning and growing in the field</h1>
            </div>
          </div>
        </div>
        {/* third columm */}
        <div className="h-full md:w-[55%] w-full">
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
