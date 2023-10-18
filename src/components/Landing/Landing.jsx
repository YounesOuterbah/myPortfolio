import { BsLinkedin, BsGithub } from "react-icons/bs";

export const Landing = () => {
  return (
    <div className="landing flex items-center bg-[#23283e] h-[calc(100vh-96px)] w-full">
      <div className="container text-center flex flex-col h-full justify-evenly">
        <div className="text-6xl font-bold">
          <h1 className="text-[#cdcdff]">
            Hi, I am <span className="text-[#90a0d9] ">Younes Outerbah.</span>
          </h1>
        </div>
        <p className="text-3xl font-bold -mt-16 text-[#cdcdff]">A Front End Developer.</p>
        <p className="-mt-10 max-w-xl mx-auto">
          I'm a junior front-end developer Based in Algeria. I'm enthusiastic about crafting
          user-friendly web experiences with a strong foundation. I stay updated on the latest
          trends and am eager to contribute to innovative projects.
        </p>
        <div className="icons flex justify-center -mt-8 text-2xl">
          <a href="https://www.linkedin.com/in/younesouterbah/" target="_blank">
            <BsLinkedin className="cursor-pointer hover:text-[#90a0d9] duration-300 mr-5" />
          </a>
          <a href="https://github.com/YounesOuterbah" target="_blank">
            <BsGithub className="cursor-pointer hover:text-[#90a0d9] duration-300" />
          </a>
        </div>
      </div>
    </div>
  );
};
