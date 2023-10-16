import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

export const Footer = () => {
  return (
    <>
      <div className="footer py-12 bg-[#2d2e32] text-white text-xl">
        <div className="container flex justify-between">
          Copyright &copy; 2023. All rights are reserved
          <div className="icons flex items-center text-3xl">
            <a href="https://github.com/YounesOuterbah" target="_blank" className="duration-300 hover:text-red-400">
              <AiFillGithub />
            </a>
            <a href="https://www.linkedin.com/in/younesouterbah/" target="_blank" className="duration-300 hover:text-red-400 ml-6">
              <AiFillLinkedin />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
