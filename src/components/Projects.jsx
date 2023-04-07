import React from "react";

const Projects = () => {
  return (
    <div className=" w-full  border-black  md:border-x-[6px] font-textFont">
      {/* button animation */}
      <div className="w-full md:h-[70px] h-[40px] flex md:justify-start justify-center relative md:border-b-[6px] border-x-[3px] md:border-x-0 border-b-[3px] border-black bg-yellow md:bg-white ">
        <div className="md:animate-wiggle flex items-center justify-start ">
          <span
            className="w-[150px] h-full  font-textFont flex justify-center items-center bg-[#ECC73b] italic md:border-r-[6px]  border-black text-[16px]
           cursor-pointer uppercase font-extrabold "
          >
            projects
          </span>{" "}
        </div>
      </div>
      <div className="w-full  md:h-[700px] h-[800px]  md:border-black md:border-b-[6px] border-b-[3px] flex items-center justify-center ">
        <div className="w-[80%] h-[700px] flex flex-row items-center justify-evenly relative overflow-hidden ">
          <div className="h-[70%] w-[500px] md:border-black md:border-[6px] border-[3px] bg-red-600 absolute "></div>
          <div className="h-[70%] w-[500px] md:border-black md:border-[6px] border-[3px]  absolute left-0"></div>
          <div className="h-[70%] w-[500px] md:border-black md:border-[6px] border-[3px] absolute right-0 "></div>
          <div className="h-[70%] w-[500px] md:border-black md:border-[6px] border-[3px] absolute"></div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
