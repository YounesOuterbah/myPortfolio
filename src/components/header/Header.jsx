import { BsFillSunFill, BsMoonFill } from "react-icons/bs";
import { useDarkMode } from "../../context/DarkModeProvider";

export const Header = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  return (
    <div
      className={`${darkMode ? "dark bg-[#2d2e32]" : "bg-white"} py-6 mb-12 shadow-md`}
      style={{ position: "sticky", top: 0, zIndex: 100 }}
    >
      <div className="container flex items-center justify-between">
        <div className="logo font-semibold text-2xl dark:text-white">YOUNES</div>
        <div className="bg-[#eee] p-2 rounded-full cursor-pointer" onClick={toggleDarkMode}>
          {darkMode ? <BsFillSunFill /> : <BsMoonFill />}
        </div>
      </div>
    </div>
  );
};
