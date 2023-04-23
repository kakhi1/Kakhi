import React from "react";
import useSmoothHorizontalScroll from "use-smooth-horizontal-scroll";
import { useState } from "react";
import { BsArrowRight } from "react-icons/bs";

const Projects = () => {
  const { scrollContainerRef, handleScroll, scrollTo, isAtStart, isAtEnd } =
    useSmoothHorizontalScroll();
  const [isClicked, setIsClicked] = useState(false);
  const [isClickedR, setIsClickedR] = useState(false);
  return (
    <div
      className=" w-full border-black dark:border-white1  md:border-x-[6px] font-textFont bg-white1 dark:bg-darkMode dark:text-white1"
      id="projects"
    >
      {/* button animation */}
      <div className="w-full md:h-[70px] h-[40px] flex md:justify-start justify-center relative md:border-b-[6px]  border-x-[3px] md:border-x-0 border-b-[3px] border-black dark:border-white1 bg-yellow md:bg-white1 md:dark:bg-darkMode ">
        <div className="md:animate-wiggle flex items-center justify-start  ">
          <span
            className="w-[150px] h-full  font-textFont flex justify-center items-center bg-yellow  md:italic md:border-r-[6px]  border-black dark:border-white1 text-[16px]
           cursor-pointer uppercase font-extrabold pl-2"
          >
            projects
          </span>{" "}
        </div>
      </div>
      <div
        className="w-full  md:h-[770px] md:border-black dark:border-white1 md:border-b-[6px] border-b-[3px] 
      flex  flex-col items-center justify-between md:p-8 overflow-hidden md:overflow-x-scroll"
      >
        {/* scroll bar    */}
        <div
          className="w-full  md:h-[70px] h-0  md:border-black dark:border-white1 md:border-[6px] border-[3px] invisible md:visible 
      flex items-center justify-between overflow-hidden  "
        >
          <div
            onClick={() => {
              scrollTo(-200);
              setIsClicked(true);
            }}
            disabled={isAtStart}
            className={`flex flex-row items-center ml-4 h-full gap-2 cursor-pointer ${
              isClicked ? "animate-scrollbarrL" : ""
            }`}
            onAnimationEnd={() => setIsClicked(false)}
          >
            <div className="h-[45px] w-[40px] animate-bounce relative overflow-hidden ">
              <div className="h-[50px] w-[50px] bg-red-600 rotate-45 absolute left-8"></div>
            </div>
            <div className="h-5 w-5 rounded-full bg-red-600  animate-bounce "></div>
            <div className="h-3 w-3 rounded-full bg-red-600  animate-bounce "></div>
            <div className="h-1 w-1 rounded-full bg-red-600 animate-bounce "></div>
          </div>
          <div
            onClick={() => {
              scrollTo(200);
              setIsClickedR(true);
            }}
            disabled={isAtEnd}
            className={`flex flex-row items-center mr-4 h-full gap-2  cursor-pointer  ${
              isClickedR ? "animate-scrollbarr" : ""
            }`}
            onAnimationEnd={() => setIsClickedR(false)}
          >
            <div className="h-1 w-1 rounded-full bg-red-600 animate-bounce"></div>
            <div className="h-3 w-3 rounded-full bg-red-600 animate-bounce"></div>
            <div className="h-5 w-5 rounded-full bg-red-600 animate-bounce"></div>
            <div className="h-[40px] w-[40px] animate-bounce relative overflow-hidden">
              <div className="h-[45px] w-[50px] bg-red-600 rotate-45 absolute right-8"></div>
            </div>
          </div>
        </div>
        {/* project cards */}
        <div
          className="w-full md:h-[700px] flex flex-row  relative md:m-4 m-0 md:overflow-x-scroll"
          ref={scrollContainerRef}
          onScroll={handleScroll}
          // style={{ overflowX: "hidden" }}
        >
          <div className="flex md:flex-row flex-col md:h-[500px] gap-2 w-full md:w-[120%]">
            <div
              className="md:w-[400px] w-full border-black dark:border-white1 h-[500px]  border-y-[3px]  md:border-[6px] border-[3px] lg:hover:shadow-lg 
                lg:hover:shadow-black lg:dark:border-white1 lg:hover:-translate-y-[2px] duration-300"
            >
              <div className="w-full h-[70%]  bg-project1 bg-cover bg-no-repeat flex justify-end items-end p-3 md:border-b-[6px] border-b-[3px]  border-black dark:border-white1">
                <div className="w-[150px] h-[150px] bg-project12 bg-cover bg-no-repeat border-black dark:border-white1 border-[3px]  "></div>
              </div>
              <div className="w-full h-[15%] flex items-center justify-between">
                <h1 className="font-bold font-textFont text-[22px] flex text-left ml-2">
                  FullStack MERN Application
                </h1>
                <div
                  className="h-full w-[20%] bg-yellow flex items-center md:justify-start justify-center border-black dark:border-white1 md:border-l-[6px] md:border-b-[6px]
                border-l-[3px] border-b-[3px]"
                >
                  <a
                    href="https://tranquil-sunburst-2ba6c3.netlify.app/"
                    target="_blank"
                  >
                    <BsArrowRight
                      color="#CD190A"
                      className="lg:hover:-rotate-45 lg:hover:-translate-y-2 duration-200  md:ml-4 ml-0"
                      size={40}
                    />
                  </a>
                </div>
              </div>
              <div className="w-full h-[15%] flex flex-col font-medium font-textFont text-xl md:text-base ml-2">
                <div className="flex justify-start gap-4 ">
                  {" "}
                  <span>MangoDB </span> <span> Expres</span>
                  <span> Node</span>
                  <span> Typescript</span>{" "}
                </div>
                <div className="flex justify-start gap-4 mt-2">
                  {" "}
                  <span> HTML5</span> <span> React</span>
                  <span> Material-UI</span>
                  <span> CSS</span>{" "}
                </div>
              </div>
            </div>
            <div
              className="md:w-[400px] w-full h-[500px] border-black dark:border-white1 md:border-[6px] border-[3px] left-20 lg:hover:shadow-lg
                lg:hover:shadow-black lg:hover:-translate-y-[2px] duration-300 "
            >
              <div className="w-full h-[70%] bg-project2 bg-cover bg-no-repeat flex justify-end items-end p-3 md:border-b-[6px] border-b-[3px] border-black">
                <div className="w-[150px] h-[150px] bg-project22 bg-cover bg-no-repeat border-black dark:border-white1 border-[3px]  "></div>
              </div>
              <div className="w-full h-[15%] flex items-center justify-between">
                <h1 className=" ml-10 font-bold font-textFont text-2xl text-left">
                  E-commerce Webiste
                </h1>
                <div
                  className="h-full w-[20%] bg-yellow flex items-center md:justify-start justify-center border-black dark:border-white1 md:border-l-[6px] md:border-b-[6px]
                border-l-[3px] border-b-[3px]"
                >
                  <a
                    href="https://angular-ecommerce-8944b.web.app/home"
                    target="_blank"
                  >
                    <BsArrowRight
                      color="#CD190A"
                      className="lg:hover:-rotate-45 lg:hover:-translate-y-2 duration-200 lg:ml-4 "
                      size={40}
                    />
                  </a>
                </div>
              </div>
              <div className="w-full h-[15%] flex flex-col font-medium font-textFont text-xl  md:text-base mx-5 md:mx-10 ">
                <div className="flex justify-start gap-10 ">
                  {" "}
                  <span> CSS3</span> <span> HTML5</span>
                  <span> Angular</span>
                </div>
                <div className="flex justify-start gap-10 mt-2">
                  {" "}
                  <span> TailwindCSS </span> <span> Javascript</span>
                </div>
              </div>
            </div>
            <div
              className="md:w-[400px]  w-full h-[500px] border-black dark:border-white1 md:border-[6px] border-[3px] left-20 lg:hover:shadow-lg
                lg:hover:shadow-black lg:hover:-translate-y-[2px] duration-300 "
            >
              <div className="w-full h-[70%] bg-project3 bg-cover bg-no-repeat flex justify-end items-end p-3 md:border-b-[6px] border-b-[3px] border-black dark:border-white1">
                <div className="w-[150px] h-[150px] bg-project32 bg-cover bg-no-repeat border-black dark:border-white1 border-[3px]  "></div>
              </div>
              <div className="w-full h-[15%] flex items-center justify-between ">
                <h1 className=" font-bold font-textFont text-2xl text-left ml-2">
                  Coffe Shop Landing Page
                </h1>
                <div
                  className="h-full top-0 w-[20%] bg-yellow flex items-center md:justify-start justify-center  border-black dark:border-white1 md:border-l-[6px] md:border-b-[6px]
                  border-l-[3px] border-b-[3px]"
                >
                  <a href="https://coffe-landingpage.web.app/" target="_blank">
                    <BsArrowRight
                      color="#CD190A"
                      className="lg:hover:-rotate-45 lg:hover:-translate-y-2 duration-200  lg:ml-[6px]"
                      size={40}
                    />
                  </a>
                </div>
              </div>
              <div className="w-full h-[15%] flex flex-col font-medium font-textFont text-xl md:text-base ml-2">
                <div className="flex justify-start gap-10 ">
                  {" "}
                  <span> CSS3</span> <span> HTML5</span>
                  <span> React</span>
                </div>
                <div className="flex justify-start gap-10 mt-2">
                  {" "}
                  <span> TailwindCSS </span> <span> Javascript</span>
                </div>
              </div>
            </div>
            <div
              className="md:w-[400px] w-full h-[500px] border-black dark:border-white1 md:border-[6px] border-[3px] left-20 lg:hover:shadow-lg
                lg:hover:shadow-black lg:hover:-translate-y-[2px] duration-300"
            >
              <div className="w-full h-[70%] bg-project4 bg-cover bg-no-repeat flex justify-end items-end p-3 md:border-b-[6px] border-b-[3px] border-black dark:border-white1">
                <div className="w-[150px] h-[150px] bg-project42 bg-cover bg-no-repeat border-black dark:border-white1 border-[3px]  "></div>
              </div>
              <div className="w-full h-[15%] flex items-center justify-between ">
                <h1 className=" font-bold font-textFont text-2xl text-left ml-10">
                  Simple Landing Page
                </h1>
                <div
                  className="h-full top-0 w-[20%] bg-yellow flex items-center md:justify-start justify-center  border-black dark:border-white1 md:border-l-[6px] md:border-b-[6px]
                  border-l-[3px] border-b-[3px]"
                >
                  <a href="https://landingpg-91672.web.app/" target="_blank">
                    <BsArrowRight
                      color="#CD190A"
                      className="lg:hover:-rotate-45 lg:hover:-translate-y-2 duration-200  md:ml-4 ml-0"
                      size={40}
                    />
                  </a>
                </div>
              </div>
              <div className="w-full h-[15%] flex flex-col font-medium font-textFont text-xl  md:text-base ml-10">
                <div className="flex justify-start gap-14 ">
                  {" "}
                  <span> CSS3</span> <span> HTML5</span>
                  <span> React</span>
                </div>
                <div className="flex justify-start gap-14 mt-2 ">
                  {" "}
                  <span> TailwindCSS </span> <span> Javascript</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
