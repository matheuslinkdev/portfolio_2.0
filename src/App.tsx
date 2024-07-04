import Header from "./Components/Commons/Header";
import Home from "./Screens/Home";
import "./App.css";
import Skills from "./Screens/Skills";
import Projects from "./Screens/Projects";
import Contact from "./Screens/Contact";
import { animated, useSpring } from "@react-spring/web";
import { useInView } from "react-intersection-observer";
import { AnimatedComponentProps } from "./Types/global-types";

const AnimatedComponent = ({ children }: AnimatedComponentProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const props = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateX(0)" : "translateX(-10px)",
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
          <Projects />
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
