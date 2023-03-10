import React from "react";

const Contact = () => {
  return (
    <div
      id="contact"
      className="h-screen m-3 md:m-3 text-xl text-gray-900 font-semibold flex flex-col justify-center items-center p-4 lg:flex-row w-full gap-[80px]"
    >
      <div className="w-full gap-4 flex justify-around items-center p-4">
        <div className="w-1/3 flex flex-col justify-between items-center gap-4 p-4">
          <div>
            <h4 className="text-violet-600">Contact me</h4>
            <div className="font-bold text-5xl">Get connected to grow better business.</div>
          </div>
          <div className="flex justify-between py-2 px-4 w-full flex-col md:flex-row mt-4">
            <div className="flex flex-col">
              <div className="text-violet-600">Email</div>
              <div>info@email</div>
            </div>
            <div className="flex flex-col">
              <div className="text-violet-600">Phone</div>
              <div>+123456</div>
            </div>
          </div>
        </div>
        <div className="w-1/2 p-4">
          <form class="w-full">
            <div class="md:flex md:items-center mb-6">
              <div class="md:w-1/3">
                <label
                  class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                  for="full-name"
                >
                  Full Name
                </label>
              </div>
              <div class="md:w-2/3">
                <input
                  class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  id="full-name"
                  type="text"
                />
              </div>
            </div>
            <div class="md:flex md:items-center mb-6">
              <div class="md:w-1/3">
                <label
                  class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                  for="email"
                >
                  Email Address
                </label>
              </div>
              <div class="md:w-2/3">
                <input
                  class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  id="email"
                  type="text"
                />
              </div>
            </div>
            <div class="md:flex md:items-center mb-6">
              <div class="md:w-1/3">
                <label
                  class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                  for="messages"
                >
                  Messages
                </label>
              </div>
              <div class="md:w-2/3">
                <input
                  class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  id="messages"
                  type="text-area"
                />
              </div>
            </div>
            <div class="md:flex md:items-center">
              <div class="md:w-1/3"></div>
              <div class="md:w-2/3">
                <button
                  class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
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
