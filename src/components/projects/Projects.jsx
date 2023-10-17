import { useDarkMode } from "../../context/DarkModeProvider";
import { Buy2coin } from "./Buy2coin";
import { Shopily } from "./Shopily";

export const Projects = () => {
  const { darkMode } = useDarkMode();
  return (
    <div className={`projects ${darkMode ? "bg-white" : "bg-[#eee]"} py-24`}>
      <div className="container">
        <h1 className="text-center uppercase font-bold text-4xl text-red-400">Projects</h1>
        <div className="project-container mt-24">
          <div
            className={`project-box flex ${
              darkMode ? " bg-[#fafafaf1] shadow-lg" : "bg-white"
            }  p-6 rounded-lg w-[90%] mx-auto flex-col-reverse md:flex-row mb-12`}
          >
            <Shopily />
          </div>
          <div
            className={`project-box flex ${
              darkMode ? " bg-[#fafafaf1] shadow-lg" : "bg-white"
            }  p-6 rounded-lg w-[90%] mx-auto flex-col-reverse md:flex-row-reverse`}
          >
            <Buy2coin />
          </div>
        </div>
      </div>
    </div>
  );
};
