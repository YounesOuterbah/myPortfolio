import Lottie from "lottie-react";
import prog from "/public/img/prog.json";
import { useDarkMode } from "../../context/DarkModeProvider";
import codingLaptop from "/public/img/coding.webp";
import spinDev from "/public/img/spin.svg";

export const About = () => {
  const { darkMode } = useDarkMode();
  return (
    <div className="about pt-20 pb-24">
      <div className="container">
        <div
          className={`content relative flex justify-between flex-col lg:flex-row md:w-[90%] mx-auto p-8 rounded-2xl ${
            darkMode ? "bg-white" : "bg-[#eee]"
          } @apply shadow-[rgba(0,0,0,0.18)_0px_2px_4px]`}
        >
          <div className="w-full h-full lg:w-96 lg:h-96 overflow-hidden rounded-2xl">
            <img src={codingLaptop} alt="myPic" className="object-cover h-full" />
          </div>
          <div className="img absolute hidden lg:block bottom-2 left-[20rem] rounded-full w-36  bg-white">
            <img src={spinDev} className="animate-spin" style={{ animationDuration: "15s" }} />
            <Lottie animationData={prog} className="absolute top-8 right-10 w-2/4" />
          </div>
          <div className="text flex-1 mt-6 lg:ml-14">
            <h2 className="text-red-400 font-bold">ABOUT ME</h2>
            <h4 className="text-2xl font-semibold mb-6">
              A dedicated Front-end Developer From Algeria
            </h4>
            <p className="text-[#555] leading-7">
              As a Junior Front-End Developer based in Algeria, I bring to the table a comprehensive
              and diverse skill set that spans the realms of web development. My proficiency
              encompasses HTML, CSS, JavaScript, React, Redux, Tailwind, and SCSS, allowing me to
              create not only visually stunning but also highly functional and responsive websites.
              My dedication to the craft extends beyond the basics, as I am adept at designing and
              maintaining websites that prioritize a seamless user experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
