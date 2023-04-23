import React, { useState } from "react";
import { BsArrowUpLeft } from "react-icons/bs";
import axios from "axios";

const Contact = () => {
  const [isClikedM, setIsClickedM] = useState(false);

  const [clientName, setClientName] = useState("");
  const [email, setEmail] = useState("");
  const [messages, setMessages] = useState("");
  //  ==========error message
  const [errClientName, setErrClientName] = useState(false);
  const [errEmail, setErrEmail] = useState(false);
  const [errMessages, setErrMessages] = useState(false);
  const [succesMsg, setSuccesMsg] = useState("");

  // ==========  email validation
  const EmailValidation = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };
  // email validate
  const handleName = (e) => {
    setClientName(e.target.value);
    setErrClientName(false);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setErrEmail(false);
  };
  const handleMessages = (e) => {
    setMessages(e.target.value);
    setErrMessages(false);
  };
  const handleSend = (e) => {
    e.preventDefault();
    if (!clientName) {
      setErrClientName(true);
    }
    if (!email) {
      setErrEmail(true);
    } else {
      if (!EmailValidation(email)) {
        setErrEmail(true);
      }
    }
    if (!messages) {
      setErrMessages(true);
    }
    if (clientName && email && EmailValidation(email) && messages) {
      axios.post("https://getform.io/f/7a0928b0-ae02-4e9d-8a4f-b955fe8ec5ba", {
        name: clientName,
        email: email,
        message: messages,
      });
      setSuccesMsg(
        "hello,your messages has been sent successfully.Thank you for your time!"
      );
      setClientName("");
      setEmail("");
      setMessages("");
    }
  };

  return (
    <div
      id="contact"
      className="md:w-full md:h-[780px] border-black dark:border-white1 dark:text-white1 md:border-x-[6px] md:border-b-[6px] bg-white1 dark:bg-darkMode "
    >
      {/* contact button */}
      <div
        className="w-full md:h-[8%] h-[40px] flex md:justify-start justify-center relative 
       border-black dark:border-white1 bg-yellow md:bg-white1 dark:md:bg-darkMode   border-x-[3px] md:border-x-0"
      >
        <div className="md:animate-wiggle flex items-center  justify-start w-[175px] h-full">
          <span
            className=" w-full h-full font-textFont flex justify-start items-center bg-yellow
            text-[16px] cursor-pointer uppercase font-extrabold border-black dark:border-white1 md:border-r-[6px] md:pl-10 "
          >
            contact me{" "}
          </span>{" "}
        </div>
      </div>
      {/* contact body */}
      <div
        className="w-full md:h-[720px] h-[700px] border-black dark:border-white1 md:border-y-[6px] border-t-[3px] border-l-[3px] md:border-l-0 flex md:flex-row flex-col items-center
       justify-start relative "
      >
        {/* first columm */}
        <div
          className="md:w-[35%] md:h-full h-[40%]  md:border-r-[6px] border-r-[3px] w-full border-black dark:border-white1 flex md:flex-col 
          items-center justify-center font-textFont"
        >
          <div className="w-full h-[45%] bg-white1 dark:bg-darkMode ">
            <div className="md:p-10 p-5 h-full w-full flex  flex-col  justify-center">
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
          <div className="md:w-full w-0  md:h-[40%] h-0 bg-blue border-black dark:border-white1  md:border-y-[6px]"></div>
          <div className="md:w-full w-0 md:h-[15%] h-0 flex">
            <div className="w-1/3  bg-yellow h-full"></div>
            <div className="w-2/3  h-full border-black dark:border-white1 border-l-[6px]"></div>
          </div>
        </div>
        {/* second columm */}
        <div className="md:w-[50%] w-full md:h-full h-[60%] ">
          <div className="md:w-full w-0 md:h-[15%] h-0">
            <div className="w-1/3 h-full border-black dark:border-white1 md:border-r-[6px]  bg-red1"></div>
            <div className="w-2/3 h-full"></div>
          </div>
          <div
            className="w-full md:h-[60%] h-full  bg-white1 dark:bg-darkMode border-black dark:border-white1 md:border-y-[6px]  border-y-[3px]
              md:border-r-[6px] border-r-[3px] md:shadow-lg md:shadow-black relative flex items-end justify-start "
          >
            {/* before send message form */}
            <div
              style={{ animationFillMode: isClikedM ? "forwards" : "none" }}
              className={`md:w-[120px] lg:h-[120px] h-[80px] w-[80px]  bg-yellow absolute bottom-0 right-0
              border-black dark:border-white1 md:border-l-[6px] border-l-[3px]  md:border-t-[6px] border-t-[3px] flex items-end justify-end  ${
                isClikedM ? "animate-increase" : "animate-decrease"
              }`}
            >
              {/* send message form */}{" "}
              {isClikedM && (
                <div
                  className={`w-[80%] h-[80%] absolute flex md:left-10 left-5 top-[100px] font-textFont ${
                    isClikedM ? "animate-opacity" : ""
                  }`}
                >
                  {" "}
                  {succesMsg ? (
                    <p className="text-center text-base font-titleFont p-20 ">
                      {succesMsg}
                    </p>
                  ) : (
                    <form
                      className="w-[80%] h-[80]"
                      id="form"
                      action="https://getform.io/f/7a0928b0-ae02-4e9d-8a4f-b955fe8ec5ba"
                      method="POST"
                    >
                      <div className=" flex md:flex-row flex-col text-sm gap-2 w-full ">
                        <input
                          onChange={handleName}
                          value={clientName}
                          type="text "
                          placeholder="Full Name"
                          className={`${
                            errClientName
                              ? "border-red1 focus-visible:border-red1"
                              : "border-black focus-visible:border-black"
                          } border-2 border-black dark:border-white1 outline-none bg-white1 dark:bg-darkMode w-full md:w-[50%]`}
                        />
                        <input
                          onChange={handleEmail}
                          value={email}
                          type="Email "
                          placeholder="Email Address"
                          className={`${
                            errEmail
                              ? "border-red1 focus-visible:border-red1"
                              : "border-black focus-visible:border-black"
                          } border-2 border-black dark:border-white1 outline-none bg-white1 dark:bg-darkMode w-full md:w-[50%]`}
                        />
                      </div>
                      <div className="w-full flex flex-col items-start my-1">
                        <textarea
                          onChange={handleMessages}
                          value={messages}
                          className={`${
                            errMessages
                              ? "border-red1 focus-visible:border-red1"
                              : "border-black focus-visible:border-black"
                          } border-2 border-black dark:border-white1 outline-none font-semibold w-full bg-white1 dark:bg-darkMode`}
                          cols="15"
                          rows="4"
                          placeholder="Your message"
                        ></textarea>
                        <button
                          onClick={handleSend}
                          className="my-1 dark:text-darkMode"
                        >
                          Send Message
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              )}
              <BsArrowUpLeft
                color="#CD190A"
                size={60}
                className={`lg:m-5 lg:hover:-translate-x-6 lg:hover:-translate-y-7 duration-300 ${
                  isClikedM ? "animate-arowwRotate " : "animate-arowwRotate2"
                }`}
                onClick={() => setIsClickedM(!isClikedM)}
                style={{ animationFillMode: isClikedM ? "forwards" : "none" }}
              />
            </div>
            <h1
              className={`uppercase lg:text-3xl md:text-2xl text-3xl font-semibold font-textFont lg:p-10 p-5  ${
                isClikedM
                  ? "md:-translate-y-[300px] -translate-y-[325px]  duration-1000"
                  : "animate-textdown"
              } `}
            >
              Send Messages
            </h1>
          </div>
          <div className="md:w-full w-0 md:h-[25%] h-0">
            <div className="w-[85%] h-full border-black dark:border-white1 md:border-r-[6px] bg-red1"></div>
            <div className="w-[15%] h-full"></div>
          </div>
        </div>
        {/* third columm */}
        <div className="md:w-[20%] w-0 md:h-full h-0">
          <div className="w-full h-[20%]"></div>
          <div className="w-full h-[40%] bg-white1 dark:bg-darkMode border-black dark:border-white1 md:border-y-[6px]"></div>
          <div className="w-full h-[40%]"></div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
