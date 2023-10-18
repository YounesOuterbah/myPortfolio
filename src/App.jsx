import { Header } from "./components/Header/Header";
import { Landing } from "./components/Landing/Landing";
import { Skills } from "./components/skills/Skills";

function App() {
  return (
    <div className="boss text-[#bdbddd]">
      <Header />
      <Landing />
      <Skills />
    </div>
  );
}

export default App;
