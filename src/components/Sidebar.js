import React, {useState} from "react";
import {HiMenuAlt3, HiCode} from "react-icons/hi";
import {BiHome} from "react-icons/bi";
import {AiOutlineUser} from "react-icons/ai";
import {FiMessageSquare} from "react-icons/fi";

const Sidebar = () => {
  const menus = [
    {name: "Main", icon: BiHome, id: "main"},
    {name: "About me", icon: AiOutlineUser, id: "about"},
    {name: "My Projects", icon: HiCode, id: "projects"},
    {name: "Contact", icon: FiMessageSquare, id: "contact"},
  ];
  const scrollIntoView = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({behavior: "smooth", block: "start"});
      setOpen(false);
    }
  };
  const [open, setOpen] = useState(false);
  return (
    <div
      className={`bg-white border-r-2 border-gray-200 ${
        open
          ? "w-screen md:w-64 bottom-0 h-screen"
          : "w-[60px] h-[60px] sm:bottom-0 sm:h-screen border-r-2 border-b-2 border-gray-200 p-1 rounded-br-3xl sm:rounded-none"
      } duration-500 text-black fixed top-0 z-50 overflow-hidden px-3 py-2`}
    >
      <div className={`flex py-3 ${open ? "px-3 justify-end" : "justify-center sm:justify-end"}`}>
        <HiMenuAlt3
          size={26}
          className="cursor-pointer hover:scale-125 duration-300 hover:text-violet-400"
          onClick={() => setOpen(!open)}
        />
      </div>
      <div className="mt-4 flex flex-col gap-4 relative">
        <div className={`w-full flex items-center justify-center`}>
          <div
            className={`w-[96px] h-[96px] sm:w-[126px] sm:h-[126px] md:w-[176px] md:h-[176px] rounded-full overflow-hidden transition duration-500 flex justify-center items-center px-auto ${
              open ? "scale-100 blur-none" : "scale-0 blur-lg"
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
          <div
            onClick={() => scrollIntoView(menu?.id)}
            key={i}
            className={`w-full group flex items-center text-md gap-3.5 font-medium p-2 hover:bg-violet-400 rounded-md hover:scale-110 duration-300`}
          >
            <div>{React.createElement(menu?.icon, {size: "20"})}</div>
            <h2
              style={{
                transitionDelay: `${i + 3}00ms`,
              }}
              className={`overflow-hidden z-20 whitespace-pre duration-500 ${
                !open && "opacity-0 translate-x-28"
              }`}
            >
              {menu?.name}
            </h2>
            <h2
              className={`${
                open && "hidden"
              } overflow-hidden absolute z-20 left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}
            >
              {menu?.name}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
