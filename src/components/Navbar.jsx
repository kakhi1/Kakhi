import React, { useEffect } from "react";
import { useState } from "react";
import { BsArrowUpLeft } from "react-icons/bs";

const Navbar = (props) => {
  const [isClick, setIsClick] = useState("false");
  const [theme, setTheme] = useState("dark");
  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);
  const handleClick = () => {
    setTheme(theme === "dark" ? "light" : "dark");
    // setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };
  return (
    <div className="flex flex-row md:justify-between justify-start items-center  w-full md:h-[80px] h-[50px] md:relative border-black dark:border-white1 dark:text-white1 md:border-[6px] border-[3px] bg-white1 dark:bg-[#171314]">
      <div className="md:w-[65%] w-[400px] h-full flex items-center justify-between md:relative md:border-r-[6px] border-black dark:border-white1 md:ml-[38px] ml-5 ">
        <div className="md:w-[400px] w-[250px] flex items-center justify-between ">
          <span className="md:text-[28px] text-[20px]  font-bold font-textFont uppercase">
            kakhi mtchedluri
          </span>
        </div>
        <div className="w-[50px] h-[25px] flex justify-end items-center md:mr-14 mr-[120px]  bg-yellow rounded-md border-black dark:border-white1 border-2 ">
          <div
            onClick={() => {
              handleClick();
            }}
            className={`${
              theme === "dark" ? "animate-slideLeft" : "animate-slideRight"
            } bg-black rounded-full w-[40%] h-[90%] mr-[2px] `}
            style={{ animationFillMode: theme ? "forwards" : "none" }}
          ></div>
        </div>
      </div>
      <div className="w-[50%] h-[100px] invisible md:visible ">
        <ul className="flex flex-row h-full w-full justify-around items-center font-extrabold uppercase text-[14px] ">
          <li onClick={() => props.handleClick("about")}>
            <a
              className="w-[110px] h-[50px] lg:hover:w-[120px] lg:hover:h-[60px] lg:hover:text-[18px] lg:hover:border-[3px]  lg:hover:border-black dark:lg:hover:border-white1 font-textFont flex justify-center items-center
         lg:hover:rotate-12 lg:hover:bg-[#ECC73B] lg:hover:italic duration-500  lg:hover:drop-shadow-lg ease-in-out"
              href="#about"
            >
              About Me
            </a>
          </li>
          <li onClick={() => props.handleClick("projects")}>
            <a
              className="w-[100px] h-[50px] font-textFont lg:hover:w-[120px] lg:hover:h-[60px] lg:hover:text-[17px] lg:hover:border-[3px] lg:hover:border-black dark:lg:hover:border-white1 flex justify-center items-center
         lg:hover:rotate-12 lg:hover:bg-[#ECC73B] lg:hover:italic duration-500 lg:hover:drop-shadow-lg ease-in-out"
              href="#projects"
            >
              projects
            </a>
          </li>
          <li onClick={() => props.handleClick("contact")}>
            <a
              className="md:w-[110px] md:h-[50px]  font-textFont lghover:w-[120px] lg:hover:h-[60px] lg:hover:text-[18px] lg:hover:border-[3px] lg:hover:border-black dark:lg:hover:border-white1 flex justify-center items-center
         lg:hover:rotate-12 lg:hover:bg-[#ECC73B]  lg:hover:italic duration-500 lg:hover:drop-shadow-lg ease-in-out"
              href="#contact"
            >
              contact Me
            </a>
          </li>
        </ul>
      </div>
      <div
        className={`${
          isClick ? "animate-NavInc" : ""
        } w-[50px] h-[50px] absolute right-0 top-0 visible md:invisible bg-white1 z-30 dark:text-darkMode border-y-[3px] border-[3px] border-black dark:border-white1 `}
        style={{ animationFillMode: isClick ? "forwards" : "none" }}
      >
        <div className="flex items-center justify-center">
          {isClick && (
            <div
              className={`${isClick ? "animate-opacity" : ""}w-full h-full `}
            >
              <ul
                className="flex flex-col text-left h-full w-full justify-start items-center font-extrabold
               uppercase text-[14px] gap-2 mt-10"
              >
                <li
                  onClick={() => {
                    props.handleClick("about");
                    setIsClick(!isClick);
                  }}
                >
                  <a
                    className="font-textFont  flex justify-center items-center "
                    href="#about"
                  >
                    about me
                  </a>
                </li>
                <li
                  onClick={() => {
                    props.handleClick("projects");
                    setIsClick(!isClick);
                  }}
                >
                  <a
                    className="font-textFont  flex justify-center items-start "
                    href="#projects"
                  >
                    projects
                  </a>
                </li>
                <li
                  onClick={() => {
                    props.handleClick("contact");
                    setIsClick(!isClick);
                  }}
                >
                  <a
                    className="font-textFont  flex justify-center items-center"
                    href="#contact"
                  >
                    contact Me
                  </a>
                </li>
              </ul>
            </div>
          )}{" "}
          <BsArrowUpLeft
            onClick={() => setIsClick(!isClick)}
            color="#CD190A"
            size={20}
            className={`absolute z-40 top-0 right-0 -rotate-90 ${
              isClick ? "animate-NavRotate" : ""
            }`}
            style={{ animationFillMode: isClick ? "forwards" : "none" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
