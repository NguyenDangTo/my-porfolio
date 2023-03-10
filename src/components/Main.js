import React from "react";
import {LazyLoadImage} from "react-lazy-load-image-component";
import Type from "../components/Type";

const Main = () => {
  return (
    <div
      id="main"
      className="z-10 m-3 text-xl text-gray-900 font-semibold flex flex-col justify-center items-center p-4 lg:flex-row w-full gap-[80px] min-h-screen"
    >
      <div className="flex flex-col justify-center items-center animate-l_join">
        <div className="flex flex-col justify-center mb-4 ">
          <div className="text-xl md:text-3xl mb-4">
            Hi There! <span className="text-3xl md:text-5xl wave">👋🏻</span>
          </div>
          <div className="text-2xl md:text-4xl">
            I'M <span className="text-violet-500">NGUYEN DANG TO</span>
          </div>
        </div>
        <Type style={{fontSize: "50px"}} />
      </div>
      <div className="w-[200px] md:w-[600px] animate-r_join">
        <LazyLoadImage src={"../images/about.png"} alt={"working"} width={"100%"} height={"100%"} />
      </div>
    </div>
  );
};

export default Main;
