import React from "react";

const Navbar = () => {
  return (
    <div className="flex flex-row md:justify-between justify-start items-center  w-full md:h-[80px] h-[50px] md:relative border-black   md:border-[6px] border-[3px]">
      <div className="md:w-[65%] w-[400px] h-full flex md:items-center justify-start md:relative md:border-r-[6px] border-black ml-4 ">
        <div className="w-[400px] flex items-start justify-start">
          <span className="md:text-[28px] text-[20px]  font-bold font-textFont">
            KAKHI MTCHEDLURI
          </span>
        </div>
      </div>
      <div className="w-[50%] h-[100px] ">
        <ul className="flex flex-row h-full w-full justify-between items-center font-extrabold uppercase text-[14px] invisible md:visible">
          <li>
            <a
              className="w-[110px] h-[50px] hover:w-[120px] hover:h-[60px] hover:text-[18px] hover:border-[3px]  hover:border-black font-textFont flex justify-center items-center
         hover:rotate-12 hover:bg-[#ECC73B] hover:italic duration-500  hover:drop-shadow-lg ease-in-out"
              href="#about-me"
            >
              About Me
            </a>
          </li>
          <li>
            <a
              className="w-[100px] h-[50px] font-textFont hover:w-[120px] hover:h-[60px] hover:border-[3px]  hover:border-black flex justify-center items-center
         hover:rotate-12 hover:bg-[#ECC73B] hover:italic duration-500 hover:text-[18px] hover:drop-shadow-lg ease-in-out"
              href="#skills"
            >
              skills
            </a>
          </li>
          <li>
            <a
              className="w-[100px] h-[50px] font-textFont hover:w-[120px] hover:h-[60px] hover:text-[17px] hover:border-[3px] hover:border-black flex justify-center items-center
         hover:rotate-12 hover:bg-[#ECC73B] hover:italic duration-500 hover:drop-shadow-lg ease-in-out"
              href="#projects"
            >
              projects
            </a>
          </li>
          <li>
            <a
              className="md:w-[110px] md:h-[50px]  font-textFont hover:w-[120px] hover:h-[60px] hover:text-[18px] hover:border-[3px] hover:border-black flex justify-center items-center
         hover:rotate-12 hover:bg-[#ECC73B]  hover:italic duration-500 hover:drop-shadow-lg ease-in-out"
              href="#contact-me"
            >
              contact Me
            </a>
          </li>
        </ul>
      </div>
      <div className="w-[50px] h-[50px] absolute right-0 visible md:invisible bg-blue-500 border-y-[3px] border-l-[3px] border-black"></div>
    </div>
  );
};

export default Navbar;
