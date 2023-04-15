import React from "react";
import { AiFillHtml5, AiFillDatabase, AiFillGithub,AiFillInstagram,AiFillLinkedin } from "react-icons/ai";
import {
  DiCss3,
  DiJavascript1,
  DiReact,
  DiAngularSimple
} from "react-icons/di";
import { SiTailwindcss } from "react-icons/si";
import { BsGit } from "react-icons/bs";

const About = () => {
  
  
  return (

    <div className="md:w-full h-[860px] border-black border-b-[6px] bg-white " id="about">
      <div
        className="w-full md:h-[8%] h-[40px] flex md:justify-start justify-center relative 
      md:border-l-[6px] border-x-[3px] md:border-x-[6px] border-black bg-yellow md:bg-white "
      >
        <div className="md:animate-wiggle flex items-center justify-start w-[175px]">
          <span
            className=" w-full h-full font-textFont flex justify-center items-center bg-yellow md:italic md:border-r-[6px]  border-black text-[16px]
           cursor-pointer uppercase font-extrabold "
          >
            about
          </span>{" "}
        </div>
      </div>
      <div className="w-full md:h-[92%] border-black md:border-b-0 md:border-[6px] border-[3px] flex md:flex-row flex-col">
        {/* first columm */}
        <div className="h-full md:w-[12%] w-[0%]">
          <div className="w-full h-[30%] bg-white"></div>
          <div className="w-full h-[50%] bg-blue md:border-y-[6px]  border-black"></div>
          <div className="w-full h-[20%] bg-yellow"></div>
        </div>
        {/* second columm */}
        <div className="h-full md:w-[40%] w-full  border-black md:border-x-[6px]">
          <div className="md:h-[15%] h-10 flex justify-start items-center px-5 lg:px-10 ">
            <div className="flex md:flex-col flex-row text-left items-start h-[60%] md:justify-start">
              {" "}
              <span className="font-bold md:text-[20px] text-[12px]">
                Hi there!
              </span>
              <div className="flex flex-row justify-start ">
                <span className="md:font-extrabold font-bold md:text-[14px] text-[12px] text-left ml-3 md:ml-0 flex items-end">
                  My name is{" "}
                </span>
                <div className=" text-red1 font-extrabold uppercase md:text-[16px] text-[12px] lg:hover:text-[20px] duration-1000 cursor-pointer ml-3">
                  Kakhi Mtchedluri
                </div>
              </div>
            </div>
          </div>
          <div className="w-full  h-[41%] md:border-y-[6px] border-y-[3px] border-black flex items-center justify-start px-5 lg:px-10">
            <div className="w-[80%] text-left font-medium h-full  flex items-center ">
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
          <div className="w-full h-[44%] flex flex-col justify-start p-5 lg:px-10 ">
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
            <div className="w-full h-1/5 text-left flex items-center font-medium pt-3 md:pt-0">
              <h1>Knowledge of responsive design principles</h1>
            </div>
            <div className="w-full h-1/5 text-left flex items-center font-medium pt-3 md:pt-0">
              <h1>Eager to continue learning and growing in the field</h1>
            </div>
          </div>
        </div>
        {/* third columm */}
        <div className="h-full md:w-[49%] w-full">
          <div className="w-full h-[10%] flex flex-row">
            <div className="w-[80%] h-full"></div>
            <div className="w-[20%] h-full bg-yellow border-black md:border-l-[6px] border-l-[3px]"></div>
          </div>
          <div className="w-full h-[60%] bg-red1 border-y-[6px] border-black">
            <img
              class="h-full max-w-full opacity-70"
              src="./src/assets/photo.jpg"
              alt="me"
            />
          </div>
          <div className="w-full h-[30%] flex flex-row justify-between relative">
            <div className="md:w-[60%] w-full h-full">
              <div className="w-full flex md:flex-col md:justify-center justify-end items-center gap-10 md:gap-0">
                <div className="md:h-10 md:w-[60%] flex md:justify-around justify-around items-center md:m-10">
                  <div className=" cursor-pointer group "> <AiFillInstagram size={30} color="red"/>
                    <div className="hover:lg:w-40 hover:lg:h-60 w-7 h-7 invisible lg:visible absolute bottom-[160px] hover:m-6 border-[6px] border-black opacity-0 group-hover:opacity-100 duration-1000"></div>
                  </div>
                  <div className=" cursor-pointer group "><AiFillGithub size={30} color="black"/>
                   <div className="hover:lg:w-40 hover:lg:h-60 w-7 h-7 invisible lg:visible absolute bottom-[160px] hover:m-6 border-[6px] border-black opacity-0 group-hover:opacity-100 duration-1000"></div></div>
                  <div className=" cursor-pointer group"><AiFillLinkedin size={30} color="#045D97"/>
                   <div className="hover:lg:w-40 hover:lg:h-60 md:w-7 md:h-7 invisible lg:visible absolute bottom-[160px] hover:m-6 border-[6px] border-black opacity-0 group-hover:opacity-100 duration-1000"></div></div>
                </div>
                <div className="md:w-[60%]  md:h-10 font-medium">
                  Download CV
                </div>
              </div>
            </div>
            <div className="w-[20%] h-full bg-blue md:border-x-[6px] border-x-[3px] border-black"></div>
            <div className="w-[20%] h-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
