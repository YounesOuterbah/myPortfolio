import { About } from "./components/about/About";
import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header/Header";
import { Landing } from "./components/landing/Landing";
import { Projects } from "./components/projects/Projects";

function App() {
  return (
    <>
      <Header />
      <Landing />
      <About />
      <Projects />
      <Footer />
    </>
  );
}

export default App;
