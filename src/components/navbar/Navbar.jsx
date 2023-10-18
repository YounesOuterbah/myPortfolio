import { useState } from "react";

export const Navbar = () => {
  const [active, setActive] = useState("home");
  return (
    <div className="navbar w-fit h-screen">
      <div className="container p-10 h-screen">
        <h1 className="font-black text-4xl -tracking-wider">Younes.</h1>
        <ul className="mt-10 text-xl font-serif">
          <li
            onClick={() => setActive("home")}
            className="cursor-pointer mb-8 relative before:absolute before:content-[''] before:-bottom-2 before:left-0 before:w-full before:h-[1px] before:opacity-30 before:bg-black"
          >
            <span className="relative before:absolute before:content-[''] before:w-0 before:h-[1px] before:-bottom-[10px] before:duration-700 hover:before:w-[7.5rem] before:bg-black">
              Home
            </span>
          </li>
          <li
            onClick={() => setActive("about")}
            className="cursor-pointer mb-8 relative before:absolute before:content-[''] before:-bottom-2 before:left-0 before:w-full before:h-[1px] before:opacity-30 before:bg-black"
          >
            <span className="relative before:absolute before:content-[''] before:w-0 before:h-[1px] before:-bottom-[10px] before:duration-700 hover:before:w-[7.5rem] before:bg-black">
              About
            </span>
          </li>
          <li
            onClick={() => setActive("projects")}
            className="cursor-pointer mb-8 relative before:absolute before:content-[''] before:-bottom-2 before:left-0 before:w-full before:h-[1px] before:opacity-30 before:bg-black"
          >
            <span className="relative before:absolute before:content-[''] before:w-0 before:h-[1px] before:-bottom-[10px] before:duration-700 hover:before:w-[7.5rem] before:bg-black">
              Projects
            </span>
          </li>
          <li
            onClick={() => setActive("contact")}
            className="cursor-pointer mb-8 relative before:absolute before:content-[''] before:-bottom-2 before:left-0 before:w-full before:h-[1px] before:opacity-30 before:bg-black"
          >
            <span className="relative before:absolute before:content-[''] before:w-0 before:h-[1px] before:-bottom-[10px] before:duration-700 hover:before:w-[7.5rem] before:bg-black">
              Contact
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};
