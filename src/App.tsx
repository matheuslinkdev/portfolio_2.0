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
      <Home />
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
