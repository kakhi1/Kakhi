import React from "react";
import { BsArrowUpLeft } from "react-icons/bs";

const Contact = () => {
  return (
    <div
      id="contact"
      className="md:w-full md:h-[800px] border-black md:border-x-[6px] md:border-b-[6px] bg-white1 "
    >
      {/* contact button */}
      <div className="md:animate-wiggle flex items-center justify-start w-[175px] h-20">
        <span
          className=" w-full h-full font-textFont flex justify-start items-center bg-yellow
           md:italic text-[16px] cursor-pointer uppercase font-extrabold border-black border-r-[6px] pl-10"
        >
          contact me{" "}
        </span>{" "}
      </div>
      {/* contact body */}
      <div className="w-full h-[720px] border-black border-y-[6px] flex items-center justify-start relative ">
        {/* first columm */}
        <div className="w-[35%] h-full border-r-[6px] border-black  font-textFont">
          <div className="w-full h-[45%] bg-white1 ">
            <div className="p-10 h-full w-full flex  flex-col  justify-center">
              <p className="flex justify-between font-semibold  ">
                <span className="font-bold">Adress:</span> Georgia, Rustavi
              </p>
              <p className="flex justify-between font-semibold  ">
                <span className="font-bold">Email:</span> Kmchedluri@gmail.com
              </p>
              <p className="flex justify-between font-semibold  ">
                <span className="font-bold">Phone:</span> +995598571851
              </p>
              <p className="flex justify-between font-semibold  ">
                <span className="font-bold">Freelance:</span> Available
              </p>
            </div>
          </div>
          <div className="w-full h-[40%] bg-blue border-black border-y-[6px]"></div>
          <div className="w-full h-[15%] flex">
            <div className="w-1/3 bg-white1 h-full"></div>
            <div className="w-2/3 bg-yellow h-full border-black border-l-[6px]"></div>
          </div>
        </div>
        {/* second columm */}
        <div className="w-[50%] h-full ">
          <div className="w-full h-[15%]">
            <div className="w-1/3 h-full border-black border-r-[6px] bg-red1"></div>
            <div className="w-2/3 h-full"></div>
          </div>
          <div
            className="w-full h-[60%]  bg-white1 border-black border-y-[6px] 
              border-r-[6px] shadow-lg shadow-black relative flex items-end justify-start "
          >
            <div
              className="w-[100%] h-[100%]  bg-yellow absolute bottom-0 right-0
              border-black md:border-l-[6px] md:border-t-[6px] flex items-end justify-end ate-increase"
            >
              <BsArrowUpLeft
                color="#CD190A"
                size={60}
                className="lg:hover:-translate-x-8 lg:hover:-translate-y-9 duration-300 "
              />
            </div>
            <h1 className="uppercase text-5xl font-semibold font-textFont p-10 ">
              Send Messages
            </h1>
          </div>
          <div className="w-full h-[25%]">
            <div className="w-[85%] h-full border-black border-r-[6px] bg-red1"></div>
            <div className="w-[15%] h-full"></div>
          </div>
        </div>
        {/* third columm */}
        <div className="w-[20%] h-full">
          <div className="w-full h-[20%]"></div>
          <div className="w-full h-[40%] bg-white1 border-black border-y-[6px]"></div>
          <div className="w-full h-[40%]"></div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
