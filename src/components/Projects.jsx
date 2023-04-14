import React from "react";
import useSmoothHorizontalScroll from "use-smooth-horizontal-scroll";

const Projects = () => {
  const { scrollContainerRef, handleScroll, scrollTo, isAtStart, isAtEnd } =
    useSmoothHorizontalScroll();
  return (
    <div
      className=" w-full  border-black  md:border-x-[6px] font-textFont "
      id="projects"
    >
      {/* button animation */}
      <div className="w-full md:h-[70px] h-[40px] flex md:justify-start justify-center relative md:border-b-[6px] border-l-[6px] border-x-[3px] md:border-x-0 border-b-[3px] border-black bg-yellow md:bg-white ">
        <div className="md:animate-wiggle flex items-center justify-start ">
          <span
            className="w-[150px] h-full  font-textFont flex justify-center items-center bg-yellow md:italic md:border-r-[6px]  border-black text-[16px]
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
      flex items-center justify-between overflow-hidden bg-yellow "
        >
          <div
            onClick={() => scrollTo(-200)}
            disabled={isAtStart}
            className="flex flex-row items-center ml-10  h-full gap-2  cursor-pointer hover:-translate-x-10 duration-1000 "
          >
            <div className="h-[45px] w-[40px] animate-bounce relative overflow-hidden ">
              <div className="h-[50px] w-[50px] bg-red-600 rotate-45 absolute left-8"></div>
            </div>
            <div className="h-5 w-5 rounded-full bg-red-600  animate-bounce "></div>
            <div className="h-3 w-3 rounded-full bg-red-600  animate-bounce "></div>
            <div className="h-1 w-1 rounded-full bg-red-600 animate-bounce "></div>
          </div>
          <div
            onClick={() => scrollTo(200)}
            disabled={isAtEnd}
            className="flex flex-row items-center mr-10 h-full gap-2  cursor-pointer hover:translate-x-10 duration-1000"
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
          className="w-full h-[700px] flex flex-row relative m-4 overflow-x-scroll"
          ref={scrollContainerRef}
          onScroll={handleScroll}
          style={{ overflowX: "scroll" }}
        >
          <div className="flex flex-nowrap h-[500px] gap-2 ">
            <div
              className="w-[400px] md:border-black  md:border-[6px] border-[3px]
           z-20 shadow-md shadow-black "
            ></div>
            <div
              className=" w-[400px] md:border-black  md:border-[6px] 
          border-[3px] left-20 "
            ></div>
            <div
              className=" w-[400px]  md:border-black md:border-[6px] border-[3px]
           "
            ></div>
            <div
              className="w-[400px] md:border-black md:border-[6px] border-[3px]
           "
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
