import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Projects from "./components/Projects";
import MLTutorial from "./components/MLTutorial";
import Contact from "./components/Contact";

const AppContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(to bottom, #0a192f, #1a1a2e);
  color: #ffffff;
  overflow-x: hidden;
`;

const Header = styled(motion.header)`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
`;

const Name = styled(motion.h1)`
  font-size: 4rem;
  font-weight: bold;
  text-align: center;
  z-index: 1;
  color: #64ffda;
`;

const StarryBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='50' cy='50' r='1' fill='%23ffffff'/%3E%3C/svg%3E");
  opacity: 0.3;
  animation: twinkle 4s infinite;

  @keyframes twinkle {
    0%,
    100% {
      opacity: 0.3;
    }
    50% {
      opacity: 0.5;
    }
  }
`;

const Cloud = styled(motion.div)`
  position: absolute;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50px;
  padding: 20px;
  font-family: monospace;
  font-size: 1.2rem;
  color: #64ffda;
  white-space: nowrap;
`;

function App() {
  return (
    <AppContainer>
      <Header>
        <StarryBackground />
        <Name
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          DornishApril
        </Name>
        <Cloud
          initial={{ x: -100, y: 100 }}
          animate={{ x: "100vw", y: 100 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          {`<code>Hello World</code>`}
        </Cloud>
        <Cloud
          initial={{ x: -100, y: 200 }}
          animate={{ x: "100vw", y: 200 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        >
          {`function() { return true; }`}
        </Cloud>
        <Cloud
          initial={{ x: -100, y: 300 }}
          animate={{ x: "100vw", y: 300 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          {`const life = "awesome";`}
        </Cloud>
      </Header>
      <Projects />
      <MLTutorial />
      <Contact />
    </AppContainer>
  );
}

export default App;
