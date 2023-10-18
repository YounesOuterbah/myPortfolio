import { Buy2coin } from "./Buy2coin";
import { Shopily } from "./Shopily";

export const Projects = () => {
  return (
    <div className="projects py-6">
      <div className="container">
        <h1 className="text-center text-3xl font-bold">PROJECTS</h1>
        <div className="project-container mt-6">
          <div className="project-box bg-[#2a2f4c] flex p-6 rounded-lg w-[90%] mx-auto flex-col-reverse md:flex-row mb-12">
            <Shopily />
          </div>
          <div className="project-box bg-[#2a2f4c] flex p-6 rounded-lg w-[90%] mx-auto flex-col-reverse md:flex-row-reverse">
            <Buy2coin />
          </div>
        </div>
      </div>
    </div>
  );
};
