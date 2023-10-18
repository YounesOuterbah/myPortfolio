import { Header } from "./components/Header/Header";
import { Landing } from "./components/Landing/Landing";
import { Projects } from "./components/projects/Projects";
import { Skills } from "./components/skills/Skills";

function App() {
  return (
    <div className="boss bg-[#23283e] text-[#bdbddd]">
      <Header />
      <Landing />
      <Projects />
      <Skills />
    </div>
  );
}

export default App;
