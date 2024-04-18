import Header from "./Components/Commons/Header";
import Home from "./Screens/Home";
import "./App.css";
import Skills from "./Screens/Skills";
import Projects from "./Screens/Projects";
import Contact from "./Screens/Contact";

function App() {
  return (
    <>
      <Header />
    
    <main className="App">
      <div id="homePage">
        <Home />
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
    </main>
    </>
  );
}

export default App;
