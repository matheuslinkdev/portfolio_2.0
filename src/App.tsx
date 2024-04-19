import React from "react";
import Header from "./Components/Commons/Header";
import Home from "./Screens/Home";
import "./App.css";
import Skills from "./Screens/Skills";
import Projects from "./Screens/Projects";
import Contact from "./Screens/Contact";
import { animated, useSpring } from "@react-spring/web";
import { useInView } from "react-intersection-observer";

const AnimatedComponent = ({ children }: { children: React.ReactNode }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const props = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateX(0)" : "translateX(-150px)",
  });

  return (
    <animated.div ref={ref} style={props}>
      {children}
    </animated.div>
  );
};

function App() {
  return (
    <>
      <Header />

      <main className="App">
        <AnimatedComponent>
          <div id="homePage">
            <Home />
          </div>
        </AnimatedComponent>
        <div id="skillsPage">
          <AnimatedComponent>
            <Skills />
          </AnimatedComponent>
        </div>
        <div id="projectsPage">
          <AnimatedComponent>
            <Projects />
          </AnimatedComponent>
        </div>
        <div id="contactPage">
          <AnimatedComponent>
            <Contact />
          </AnimatedComponent>
        </div>
      </main>
    </>
  );
}

export default App;
