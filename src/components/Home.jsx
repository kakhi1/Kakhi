import React from "react";

const Home = () => {
  return (
    <div className=" w-full  border-black  md:border-x-[6px] font-textFont">
      {/* button animation */}
      <div className="w-full md:h-[70px] h-[40px] flex md:justify-start justify-center relative md:border-b-[6px] border-x-[3px] md:border-x-0 border-b-[3px] border-black bg-yellow md:bg-white ">
        <div className="md:animate-wiggle flex items-center justify-start ">
          <span
            className="w-[150px] h-full  font-textFont flex justify-center items-center bg-[#ECC73b] italic md:border-r-[6px]  border-black text-[16px]
           cursor-pointer uppercase font-extrabold "
          >
            about me
          </span>{" "}
        </div>
      </div>
      <div className="w-full  md:h-[700px] h-[800px]  md:border-black md:border-b-[6px] border-b-[3px] relative flex  md:flex-row flex-col">
        <div className="w-[100px] h-[200px] invisible md:visible bg-blue-500 absolute border-black md:border-[6px] border-[3px] right-2 animate-rotateSnake"></div>
        <div className="w-full  flex flex-col md:h-[700px] h-[450px] relative md:gap-20 md:m-10">
          <div className="md:w-[800px] w-full md:h-[40%] h-[50px] border-black md:border-[6px] border-x-[3px] text-left md:p-10 md:block flex items-center  justify-start  md:m-0 md:justify-center ">
            <span className="font-bold md:text-[24px] h-[50px] text-[16px] ml-4 mt-4 ">
              Hi there! My name is Kakhi Mtchedluri
            </span>
          </div>
          <div className="w-full md:w-[50%] md:h-[50%]  h-[400px] border-black md:border-[6px] border-[3px]  md:animate-slide md:bottom-[200px] bottom-0 items-center justify-center bg-yellow absolute font-semibold lg:text-[20px] text-[16px] ">
            <div className="w-[80%] text-left h-full md:m-2 lg:m-10 m-4">
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
          <div className="md:w-[800px] md:h-[40%] w-0 h-0 invisible md:visible border-black border-[6px] "></div>
        </div>
        <div className="w-full md:w-[40%] md:h-[580px] h-[350px] bg-white border-black md:border-[6px] border-[3px] md:absolute  md:mt-[65px] md:right-[60px] md:animate-slideLeft">
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
