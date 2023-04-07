import React from "react";

const Skills = () => {
  return (
    <div className="w-full h-[800px] relative flex flex-row items-centet justify-between p-10 bg-black">
      <div className="w-[200px] h-[200px] relative bg-black rounded-full border-[3px] border-white ">
        <div className="w-[30px] flex rounded-full h-[30px] absolute right-10 top-10 bg-white"></div>
        <div className="w-[40px] flex rounded-full h-[40px] absolute border-[3px] left-10 top-5 border-white"></div>
        <div className="w-[15px] flex rounded-full h-[15px] absolute left-10 bottom-5  bg-white"></div>
        <div className="w-[110px] h-[5px] bg-white animate-slide"></div>
        <div className="w-[100px] h-[5px] bg-white animate-slide"></div>
        <div className="w-[80px] h-[5px] bg-white animate-slide1 mt-10"></div>
      </div>
      <div className="w-[180px] h-[180px] bg-white"></div>
    </div>
  );
};

export default Skills;
