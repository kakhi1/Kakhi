import React from "react";
import useSmoothHorizontalScroll from "use-smooth-horizontal-scroll";
import { useState } from "react";

const Projects = () => {
  const { scrollContainerRef, handleScroll, scrollTo, isAtStart, isAtEnd } =
    useSmoothHorizontalScroll(); 
  const [isClicked, setIsClicked] = useState(false);
  const [isClickedR, setIsClickedR] = useState(false);    
  return (
    <div
      className=" w-full  border-black  md:border-x-[6px] font-textFont "
      id="projects"
    >
      {/* button animation */}
      <div className="w-full md:h-[70px] h-[40px] flex md:justify-start justify-center relative md:border-b-[6px] border-l-[6px] border-x-[3px] md:border-x-0 border-b-[3px] border-black bg-yellow md:bg-white ">
        <div className="md:animate-wiggle flex items-center justify-start ">
          <span
            className="w-[150px] h-full  font-textFont flex justify-center items-center bg-yellow  md:italic md:border-r-[6px]  border-black text-[16px]
           cursor-pointer uppercase font-extrabold "
          >
            projects
          </span>{" "}
        </div>
      </div>

      <div
        className="w-full  md:h-[770px] h-[840px]  md:border-black md:border-b-[6px] border-b-[3px] 
      flex  flex-col items-center justify-between p-8 overflow-hidden"
      >
        {/* scroll bar    */}
        <div
          className="w-full  md:h-[70px] h-[70px]  md:border-black md:border-[6px] border-[3px] 
      flex items-center justify-between overflow-hidden "
        >
          <div
            onClick={() => {
              scrollTo(-200);
              setIsClicked(true); 
            }}
            disabled={isAtStart}
            className={`flex flex-row items-center ml-4 h-full gap-2 cursor-pointer ${isClicked ? 'animate-scrollbarrL' : ''}`}
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
              setIsClickedR(true); }}
            disabled={isAtEnd}
            className={`flex flex-row items-center mr-4 h-full gap-2  cursor-pointer  ${isClickedR ? 'animate-scrollbarr' : ''}`}
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
          className="w-full h-[700px] flex flex-row relative m-4 "
          ref={scrollContainerRef}
          onScroll={handleScroll}
          style={{ overflowX: "scroll" }}
        >
          <div className="flex flex-nowrap h-[500px] gap-2">
            <div
              className="w-[400px] md:border-black  md:border-[6px] border-[3px]
           z-20 hover:shadow-md  hover:shadow-black text-blue"
            >
              <div className="w-full h-[70%] bg-red1">
              </div>
              <div className="w-full h-[15%] flex items-center justify-center">
                <h1 className="font-bold font-textFont text-2xl">Full Stack MERN Application</h1>
              </div>
              <div className="w-full h-[15%] flex flex-col font-medium font-textFont text-xl ">
                <div className="flex justify-around "> <span> CSS</span> <span> Expres</span><span> Node</span><span> Typescript</span> </div>
                <div className="flex justify-around"> <span> HTML5</span> <span> React</span><span> Material-UI</span><span> Mango-DB</span> </div>
              </div>
            </div>
            <div
              className=" w-[400px] md:border-black  md:border-[6px] 
          border-[3px] left-20 snap-always snap-center"
            ></div>
            <div
              className=" w-[400px]  md:border-black md:border-[6px] border-[3px] snap-always snap-center
           "
            ></div>
            <div
              className="w-[400px] md:border-black md:border-[6px] border-[3px] snap-always snap-center
           "
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
