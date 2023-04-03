import React from "react";
import { useState } from "react";
import "./Cube.css";

const Navbar = () => {
  return (
    <div className="flex flex-row justify-between items-center  w-full md:h-[80px] h-[50px] relative border-black   md:border-[6px] border-[3px]">
      <div className="w-[65%] h-full md:flex items-center justify-start relative md:border-r-[6px] border-black ml-7 ">
        <div>
          <span className="text-[28px] font-bold font-textFont ">
            {" "}
            KAKHI{" "}
            <span className="invisible md:visible font-textFont">
              MTCHEDLURI
            </span>{" "}
          </span>
        </div>
      </div>
      <div className="w-[50%] h-[100px] ">
        <ul className="flex flex-row h-full w-full justify-between items-center font-extrabold uppercase text-[14px] invisible md:visible">
          <li>
            <a
              className="w-[110px] h-[50px] border-[3px] hover:border-black font-textFont flex justify-center items-center
         hover:rotate-12 :hover:bg-[#ECC73B] hover:italic duration-500 hover:text-[16px] hover:drop-shadow-lg ease-in-out"
              href="#about-me"
            >
              About Me
            </a>
          </li>
          <li>
            <a
              className="w-[100px] h-[50px] rounded-md font-textFont  border-[3px] hover:border-black flex justify-center items-center
         hover:rotate-12 hover:bg-[#ECC73B] hover:italic duration-500 hover:text-[16px] hover:drop-shadow-lg ease-in-out"
              href="#skills"
            >
              skills
            </a>
          </li>
          <li>
            <a
              className="w-[100px] h-[50px] rounded-md font-textFont  border-[3px] hover:border-black flex justify-center items-center
         hover:rotate-12 hover:bg-[#ECC73B] hover:italic duration-500 hover:text-[16px] hover:drop-shadow-lg ease-in-out"
              href="#projects"
            >
              projects
            </a>
          </li>
          <li>
            <a
              className="md:w-[110px] md:h-[50px] rounded-md font-textFont  border-[3px] hover:border-black flex justify-center items-center
         hover:rotate-12 hover:bg-[#ECC73B]  hover:italic duration-500 hover:text-[14px] hover:drop-shadow-lg ease-in-out"
              href="#contact-me"
            >
              contact Me
            </a>
          </li>
        </ul>
      </div>
      <div className="w-[50px] h-[50px] absolute right-0 visible md:invisible bg-blue-600 border-y-[3px] border-l-[3px] border-black"></div>
    </div>
  );
};

export default Navbar;
