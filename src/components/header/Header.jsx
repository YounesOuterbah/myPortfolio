import { useState } from "react";
import { BsFillSunFill, BsMoonFill } from "react-icons/bs";

export const Header = () => {
  const [iconToggle, setIconToggle] = useState(true);
  return (
    <div className="header py-6 mb-12 shadow-md bg-white" style={{ position: "sticky", top: 0, zIndex: 100 }}>
      <div className="container flex items-center justify-between">
        <div className="logo font-semibold text-2xl">YOUNES</div>
        <div
          className="bg-[#eee] p-2 rounded-full cursor-pointer"
          onClick={() => setIconToggle(!iconToggle)}
        >
          {iconToggle ? <BsFillSunFill /> : <BsMoonFill />}
        </div>
      </div>
    </div>
  );
};
