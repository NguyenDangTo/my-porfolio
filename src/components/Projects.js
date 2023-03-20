import React from "react";
import {useInView} from "react-intersection-observer";
import {Link} from "react-router-dom";
import {LazyLoadImage} from "react-lazy-load-image-component";

const Projects = () => {
  const {ref, inView} = useInView({
    threshold: 0.05,
  });
  return (
    <>
      <div
        ref={ref}
        id="projects"
        className="p-4 gap-6 md:m-4 min-h-screen flex flex-col flex-wrap md:flex-row
       justify-center items-center"
      >
        <Link
          to={"https://chatapp-realtime.vercel.app/login"}
          target="_blank"
          className={`w-full max-w-[450px] md:w-1/2 lg:w-1/3 overflow-hidden h-[225px] md:h-[275px] flex border-2 border-violet-600 rounded-2xl saturate-50 hover:saturate-100 hover:scale-105 duration-200 ${
            inView && "animate-l_join"
          }`}
        >
          <>
            <LazyLoadImage
              src={"../images/chatapp.png"}
              alt={"working"}
              width={"100%"}
              height={"100%"}
            />
          </>
        </Link>
        <Link
          to={"https://fee.edu.vn/"}
          target="_blank"
          className={`w-full max-w-[450px] md:w-1/2 lg:w-1/3 overflow-hidden h-[225px] md:h-[275px] flex border-2 border-violet-600 rounded-2xl saturate-50 hover:saturate-100 hover:scale-105 duration-200 ${
            inView && "animate-t_join"
          }`}
        >
          <>
            <LazyLoadImage
              src={"../images/fee.png"}
              alt={"working"}
              width={"100%"}
              height={"100%"}
            />
          </>
        </Link>
        <Link
          to={"https://nguyendangto.github.io/lofi-app/"}
          target="_blank"
          className={`w-full max-w-[450px] md:w-1/2 lg:w-1/3 overflow-hidden h-[225px] md:h-[275px] flex border-2 border-violet-600 rounded-2xl saturate-50 hover:saturate-100 hover:scale-105 duration-200 ${
            inView && "animate-r_join"
          }`}
        >
          <>
            <LazyLoadImage
              src={"../images/lofi.png"}
              alt={"working"}
              width={"100%"}
              height={"100%"}
            />
          </>
        </Link>
        <Link
          to={"https://greeny-farm.vercel.app/"}
          target="_blank"
          className={`w-full max-w-[450px] md:w-1/2 lg:w-1/3 overflow-hidden h-[225px] md:h-[275px] flex border-2 border-violet-600 rounded-2xl saturate-50 hover:saturate-100 hover:scale-105 duration-200 ${
            inView && "animate-b_join"
          }`}
        >
          <>
            <LazyLoadImage
              src={"../images/greeny-farm.png"}
              alt={"working"}
              width={"100%"}
              height={"100%"}
            />
          </>
        </Link>
      </div>
      <Link to={"https://github.com/NguyenDangTo"} target="_blank">
        <div
          className={`${
            inView && "animate-bounce"
          } first-letter:w-full text-center text-xl font-bold mt-[35px] underline hover:text-violet-600 duration-200`}
        >
          More in my github❤️
        </div>
      </Link>
    </>
  );
};

export default Projects;
