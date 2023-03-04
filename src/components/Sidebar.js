import React, {useState} from "react";
import {HiMenuAlt3} from "react-icons/hi";
import {AiOutlineUser, AiOutlineProject} from "react-icons/ai";
import {FiMessageSquare} from "react-icons/fi";
import {Link} from "react-router-dom";

const Home = () => {
  const menus = [
    {name: "About me", link: "/", icon: AiOutlineUser},
    {name: "My Projects", link: "/projects", icon: AiOutlineProject},
    {name: "Contact", link: "/contact", icon: FiMessageSquare},
  ];
  const [open, setOpen] = useState(true);
  return (
    <div
      className={`bg-white min-h-screen border-r-2 border-gray-200 ${
        open ? "w-64" : "w-[69px]"
      } duration-500 text-black px-4 py-2`}
    >
      <div className="py-3 flex justify-end">
        <HiMenuAlt3 size={26} className="cursor-pointer" onClick={() => setOpen(!open)} />
      </div>
      <div className="mt-4 flex flex-col gap-4 relative">
        <div className={`w-full flex items-center justify-center`}>
          <div
            className={`w-[176px] h-[176px] rounded-full overflow-hidden transition duration-500 flex justify-center items-center px-auto ${
              open ? "scale-100 blur-none" : "scale-0 blur-md"
            }`}
          >
            <img
              src="../../images/anhthe.jpg"
              alt="avatar"
              width={"full"}
              height={"full"}
              className="object-cover object-center"
            ></img>
          </div>
        </div>
        {menus?.map((menu, i) => (
          <Link
            to={menu?.link}
            key={i}
            className={`w-full group flex items-center text-md gap-3.5 font-medium p-2 hover:bg-rose-300 rounded-md`}
          >
            <div>{React.createElement(menu?.icon, {size: "20"})}</div>
            <h2
              style={{
                transitionDelay: `${i + 3}00ms`,
              }}
              className={`whitespace-pre duration-500 ${
                !open && "opacity-0 translate-x-28 overflow-hidden"
              }`}
            >
              {menu?.name}
            </h2>
            <h2
              className={`${
                open && "hidden"
              } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}
            >
              {menu?.name}
            </h2>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
