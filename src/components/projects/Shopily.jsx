import { FiGithub } from "react-icons/fi";
import { RiShareBoxFill } from "react-icons/ri";
import shopily from "/public/img/shopily.png";

export const Shopily = () => {
  return (
    <>
      <div className="text-center">
        <h3 className="font-bold text-xl my-4">SHOPILY</h3>
        <p className="text-[#555] md:w-3/4 mx-auto text-lg">
          Shopily, embodies the principles of simplicity and clean design, placing a premium on
          enhancing user experiences. It's designed to seamlessly guide customers in their quest to
          find and purchase the products they desire.
        </p>
        <div className="mt-6 font-bold">
          <span className="mr-2 p-2 border shadow">REACT</span>
          <span className="p-2 border shadow">SCSS</span>
        </div>
        <div className="flex justify-center mt-8 text-xl">
          <a
            href="https://github.com/YounesOuterbah/Shopily-app"
            target="_blank"
            className="flex items-center mr-4 hover:text-red-400 cursor-pointer duration-300"
          >
            Code <FiGithub className="ml-1" />
          </a>
          <a
            href="https://shopily-app.netlify.app/"
            target="_blank"
            className="flex items-center hover:text-red-400 cursor-pointer duration-300"
          >
            Live Demo <RiShareBoxFill className="ml-1 " />
          </a>
        </div>
      </div>
      <a
        className="rounded-2xl cursor-pointer overflow-hidden h-[12rem] md:h-[20rem] md:w-[120rem] shadow relative group"
        href="https://shopily-app.netlify.app/"
        target="_blank"
      >
        <img
          src={shopily}
          className=" duration-[5500ms] hover:-translate-y-[12rem] md:hover:-translate-y-[22rem]"
          alt="Shopily Image"
        />
      </a>
    </>
  );
};
