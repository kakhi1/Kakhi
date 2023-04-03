import React from "react";

const Home = () => {
  return (
    <div className=" w-full h-[800px] border-black  md:border-x-[6px] font-textFont">
      <div className="w-full h-[70px] flex justify-start relative border-b-[6px] border-black bg-[#AB3E1D] ">
        <div className="animate-wiggle flex items-center justify-start">
          <span
            className="w-[150px] h-full  font-textFont flex justify-center items-center bg-[#ECC73b] italic border-r-[6px] border-black text-[16px]
           cursor-pointer uppercase font-extrabold "
          >
            about me
          </span>{" "}
        </div>
      </div>
      <div className="flex flex-row">
        <div className="w-[50%] h-[710px] bg-[#EDE9DE] gap-10 text-left flex ">
          <div className="flex flex-col mt-5 overflow-hidden">
            <div className="bg-bodyColor h-[20%] rounded-lg flex items-center justify-start p-10 animate-slide ">
              <span className="text-[30px] font-bold">
                Hi there! My name is Kakhi Mtchedluri
              </span>{" "}
            </div>
            <div className="mt-5 bg-bodyColor h-[50%] flex items-center rounded-lg font-semibold animate-slide ">
              {" "}
              <span className="text-[20px] p-10">
                {" "}
                I'm a self-taught web developer with a strong understanding of
                HTML, CSS, JavaScript, React, Tailwind CSS, and Angular. I have
                a passion for creating beautiful and functional websites, and
                I'm constantly learning and exploring new technologies to
                improve my skills. Let's work together to turn your ideas into
                reality on the web!
              </span>
            </div>
          </div>
        </div>
        <div className="w-[50%] h-[710px] bg-[#EDE9DE] gap-10 text-left flex ">
          <div className="mt-5 bg-bodyColor h-[50%] flex items-center rounded-lg font-semibold "></div>
          <div className="bg-bodyColor h-[20%] rounded-lg flex items-center justify-start p-10 "></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
