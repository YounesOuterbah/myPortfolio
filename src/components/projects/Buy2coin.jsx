import { FiGithub } from "react-icons/fi";
import { RiShareBoxFill } from "react-icons/ri";

export const Buy2coin = () => {
  return (
    <>
      <div className="text-center ">
        <h3 className="font-bold text-xl my-4">BUY2COIN</h3>
        <p className="text-[#555] md:w-3/4 mx-auto text-lg">
          BUY2COIN, is a crypto app that allows users to search for information about various
          cryptocurrencies in real-time features a user-friendly graphs to visualize price
          fluctuations
        </p>
        <div className="mt-6 font-bold">
          <span className="mr-2 p-2 border shadow">REACT</span>
          <span className="p-2 border shadow">TAILWIND</span>
        </div>
        <div className="flex justify-center mt-8 text-xl">
          <a
            href="https://github.com/YounesOuterbah/buy2coin-app"
            target="_blank"
            className="flex items-center mr-4 hover:text-red-400 cursor-pointer duration-300"
          >
            Code <FiGithub className="ml-1" />
          </a>
          <a
            href="https://buy2coin.netlify.app/"
            target="_blank"
            className="flex items-center hover:text-red-400 cursor-pointer duration-300"
          >
            Live Demo <RiShareBoxFill className="ml-1 " />
          </a>
        </div>
      </div>
      <a
        className="rounded-2xl cursor-pointer overflow-hidden h-[12rem] md:h-[20rem] md:w-[120rem] shadow relative group"
        href="https://buy2coin.netlify.app/"
        target="_blank"
      >
        <img
          src="/public/img/buy2coin.png"
          className=" duration-[8000ms] md:duration-[15000ms] hover:-translate-y-[42rem] md:hover:-translate-y-[65rem]"
          alt="Shopily Image"
        />
      </a>
    </>
  );
};
