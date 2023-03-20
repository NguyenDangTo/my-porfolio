import React from "react";
import {useInView} from "react-intersection-observer";
import {BsFacebook, BsLinkedin} from "react-icons/bs";
import {Link} from "react-router-dom";

const Contact = () => {
  const {ref, inView} = useInView({
    threshold: 0,
  });
  return (
    <div
      ref={ref}
      id="contact"
      className="min-h-screen m-3 md:m-3 text-xl text-gray-900 font-semibold flex flex-col justify-center items-center p-4 lg:flex-row w-full gap-[80px]"
    >
      <div
        className={`w-full gap-4 flex justify-around items-center p-4 flex-col md:flex-row py-4 ${
          inView && "animate-b_join"
        }`}
      >
        <div className="w-full md:w-1/3 flex flex-col justify-between items-center gap-4 p-4">
          <div>
            <h4 className="text-violet-600">Contact me</h4>
            <div className="font-bold text-5xl">Get connected to grow better business.</div>
          </div>
          <div className="flex justify-between w-full flex-col mt-4 gap-2">
            <div className="flex flex-col border-2 border-violet-600 p-4 rounded-3xl break-all">
              <div className="text-violet-600 ">Mail</div>
              <div>nguyendangto2502@gmail.com</div>
            </div>
            <div className="flex flex-col border-2 border-violet-600 p-4 rounded-3xl">
              <div className="text-violet-600">Phone</div>
              <div>+84 782776322</div>
            </div>
            <div className="flex p-2">
              <Link to={"https://www.facebook.com/nguyendangto2502"} target="_blank">
                <BsFacebook className="m-2 text-3xl duration-100 text-violet-600 hover:text-violet-700" />
              </Link>
              <Link to={"https://www.linkedin.com/in/nguyen-dang-to-5a9263229/"} target="_blank">
                <BsLinkedin className="m-2 text-3xl duration-100 text-violet-600 hover:text-violet-700" />
              </Link>
            </div>
          </div>
        </div>
        <div className={`w-full md:w-1/2 p-4 ${inView && "animate-r_join"}`}>
          <form className="w-full">
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label
                  className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                  htmlFor="full-name"
                >
                  Full Name
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  id="full-name"
                  type="text"
                />
              </div>
            </div>
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label
                  className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                  htmlFor="email"
                >
                  Email Address
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  id="email"
                  type="text"
                />
              </div>
            </div>
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label
                  className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                  htmlFor="messages"
                >
                  Messages
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  id="messages"
                  type="text-area"
                />
              </div>
            </div>
            <div className="md:flex md:items-center">
              <div className="md:w-1/3"></div>
              <div className="md:w-2/3">
                <button
                  className="shadow duration-150 bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                  type="button"
                >
                  Send Messages
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
