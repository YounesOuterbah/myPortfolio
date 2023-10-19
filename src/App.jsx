import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./style.css";

function Home() {
  return (
    <section id="home" className="py-5 bg-text" data-text="01">
      <div className="row">
        <div className="col-lg-6">
          <div className="banner-content my-1 pt-1 my-lg-5 pt-lg-5" data-aos="fade-in">
            <span className="text-muted text-uppercase">Front End Developer</span>
            <h1 className="banner-title display-1 lh-1 txt-fx slide-up">Younes Outerbah</h1>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-3">
          <Link
            to="/projects"
            className="btn btn-dark text-uppercase py-4 px-5"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            View All Work
          </Link>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="my-5 py-5 bg-text">
      <div className="row d-flex flex-wrap" data-aos="fade-up">
        <div className="col-lg-6 pb-5">
          <h2 className="display-4 txt-fx slide-up">About</h2>
          <div className="data-info py-3" data-aos="fade-up">
            <p>
              I'm a front-end developer. I'm enthusiastic about crafting user-friendly web
              experiences with a strong foundation. I stay updated on the latest trends and am eager
              to contribute to innovative projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="my-5 py-5 bg-text" data-text="02">
      <div className="row justify-content-center mb-5">
        <div className="col-lg-6" data-aos="fade-up">
          <h2 className="display-1 txt-fx slide-up">Skills</h2>
        </div>
      </div>
      <div className="row">
        <div className="skill-chart py-4" data-aos="fade-up">
          <ul
            className="skills list-unstyled"
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Redux</li>
            <li>Tailwind</li>
            <li>SASS</li>
            <li>Git / Github</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="my-5 py-5 bg-text" data-text="03">
      {/* Your project listing code here */}
    </section>
  );
}

function App() {
  return (
    <Router>
      <div
        className="bg-body homepage post-template"
        data-bs-spy="scroll"
        data-bs-target="#header-nav"
        tabIndex="0"
      >
        <a className="menu-btn">
          <span></span>
        </a>
        <header id="header-nav" className="col-lg-2 position-fixed px-5 bg-white h-100">
          <div className="header-wrap d-flex flex-column justify-content-between h-100">
            <div className="navigation">
              <div className="site-logo mt-5 display-1">YO.</div>
              <nav id="one-page-menu" className="vertical-menu my-5">
                <ul className="menu-list list-unstyled">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                  <li>
                    <Link to="/skills">Skills</Link>
                  </li>
                  <li>
                    <Link to="/projects">Projects</Link>
                  </li>
                </ul>
              </nav>
            </div>
            <ul
              className="icons"
              style={{ padding: 0, display: "flex", justifyContent: "space-evenly" }}
            >
              <a href="https://github.com/YounesOuterbah" target="_blank">
                {/* GitHub icon */}
              </a>
              <a href="https://www.linkedin.com/in/younesouterbah/" target="_blank">
                {/* LinkedIn icon */}
              </a>
            </ul>
          </div>
        </header>

        <main className="col-lg-10 offset-lg-2">
          <Home />
          <About />
          <Skills />
          <Projects />
        </main>
      </div>
    </Router>
  );
}

export default App;
