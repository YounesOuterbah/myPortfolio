import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import Lottie from "lottie-react";
import coding from "/public/img/coding.json";
import { Icons } from "./Icons";

export const Landing = () => {
  return (
    <div className="landing">
      <div className="container">
        <div className="box bg-[#eee] md:w-[90%] md:mx-auto md:mt-12 rounded-2xl md:justify-between p-8 flex flex-col md:flex-row items-center @apply shadow-[rgba(0,0,0,0.18)_0px_2px_4px]">
          <div className="info text-center md:text-left">
            <h1 className="font-medium text-3xl mb-1 md:mb-4 md:text-5xl ">Front End Developer</h1>
            <p className="md:mb-4 text-[#555] md:w-3/4 md:text-lg">
              Hi, I'm Younes Outerbah. A passionate Junior Front-end Developer lives in Algeria
            </p>
            <div className="icons flex justify-center mt-2 text-3xl md:justify-normal">
              <a href="https://github.com/YounesOuterbah" target="_blank">
                <AiFillGithub className="cursor-pointer mr-2 hover:text-red-600 duration-300" />
              </a>
              <a href="https://www.linkedin.com/in/younesouterbah/" target="_blank">
                <AiFillLinkedin className="cursor-pointer ml-2 hover:text-red-600 duration-300" />
              </a>
            </div>
            <p className="font-bold uppercase mt-6">tech stack:</p>
            <Icons />
          </div>
          <Lottie animationData={coding} />
        </div>
      </div>
    </div>
  );
};
