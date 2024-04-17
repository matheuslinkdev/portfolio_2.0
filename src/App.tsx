import Header from "./Components/Commons/Header";
import Home from "./Screens/Home";
import "./App.css";
import AboutMe from "./Screens/AboutMe";
import Skills from "./Screens/Skills";
import Projects from "./Screens/Projects";
import Contact from "./Screens/Contact";

function App() {
  return (
    <>
      <Header />
      <div id="homePage">
        <Home />
      </div>
      <div id="aboutmePage">
        <AboutMe />
      </div>
      <div id="skillsPage">
        <Skills />
      </div>
      <div id="projectsPage">
        <Projects />
      </div>
      <div id="contactPage">
        <Contact />
      </div>
    </>
  );
}

export default App;
