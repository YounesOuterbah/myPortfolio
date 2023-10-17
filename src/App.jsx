import { About } from "./components/about/About";
import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header/Header";
import { Landing } from "./components/landing/Landing";
import { Projects } from "./components/projects/Projects";
import { useDarkMode } from "./context/DarkModeProvider";

function App() {
  const { darkMode } = useDarkMode();
  return (
    <>
      <div className={`${darkMode && "bg-[#f3f3f3]"}`}>
        <Header />
        <Landing />
        <About />
        <Projects />
        <Footer />
      </div>
    </>
  );
}

export default App;
