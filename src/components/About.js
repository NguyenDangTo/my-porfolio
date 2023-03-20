import React from "react";
import {useInView} from "react-intersection-observer";
import {LazyLoadImage} from "react-lazy-load-image-component";

const About = () => {
  const {ref, inView} = useInView({
    threshold: 0,
  });
  return (
    <div
      ref={ref}
      id="about"
      className="my-2 z-10 md:m-3 text-xl text-gray-900 font-semibold flex flex-col justify-center items-center p-4 lg:flex-row w-full gap-[80px] min-h-screen"
    >
      <div
        className={`w-[250px] sm:w-1/2 md:w-2/5 flex flex-col justify-center items-center ${
          inView && "animate-l_join"
        }`}
      >
        <LazyLoadImage src={"../images/about.png"} alt={"working"} width={"100%"} height={"100%"} />
      </div>
      <div className={`text-center p-2 w-full md:w-1/2 ${inView && "animate-r_join"}`}>
        <div className=" flex flex-col justify-center mb-4">
          <div className="text-xl md:text-3xl mb-4">
            I am a student at{" "}
            <span className="text-violet-600">University of Information Technology</span> in{" "}
            <span className="text-violet-600">Ho Chi Minh City.</span>
          </div>
          <div className="text-2xl md:text-xl">
            As a person with good logical thinking and creativity, I aspire to become one of the
            programmers who bring optimal technology solutions to customers. At the same time, I
            want to improve my professional and professional skills and become a Fullstack
            Developer.
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
