import React from "react";
import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";
import Projects from "./components/Projects";
import MLTutorial from "./components/MLTutorial";
import Contact from "./components/Contact";

const AppContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%);
  color: #ffffff;
  overflow-x: hidden;
  position: relative;
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
  background: linear-gradient(45deg, #38bdf8, #818cf8, #c084fc);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 20px rgba(56, 189, 248, 0.3);
`;

const StarryBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at center, #1e293b 0%, #0f172a 100%);
  overflow: hidden;
`;

const fallingStar = keyframes`
  0% {
    transform: translateY(-100%) translateX(0) rotate(45deg);
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    transform: translateY(100%) translateX(100px) rotate(45deg);
    opacity: 0;
  }
`;

const FallingStar = styled.div`
  position: absolute;
  width: 2px;
  height: 2px;
  background: ${(props) => props.color || "#ffffff"};
  border-radius: 50%;
  box-shadow: 0 0 4px ${(props) => props.color || "#ffffff"};
  animation: ${fallingStar} ${(props) => props.duration || 3}s linear infinite;
  opacity: 0;
`;

function App() {
  // Generate 200 falling stars with different colors and speeds
  const fallingStars = Array.from({ length: 200 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    animationDelay: `${Math.random() * 5}s`,
    duration: 2 + Math.random() * 3, // Random duration between 2-5 seconds
    color: `hsl(${Math.random() * 360}, 70%, 80%)`, // Random pastel colors
  }));

  return (
    <AppContainer>
      <Header>
        <StarryBackground>
          {fallingStars.map((star) => (
            <FallingStar
              key={star.id}
              style={{
                left: star.left,
                animationDelay: star.animationDelay,
                animationDuration: `${star.duration}s`,
              }}
              color={star.color}
            />
          ))}
        </StarryBackground>
        <Name
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          DornishApril
        </Name>
      </Header>
      <Projects />
      <MLTutorial />
      <Contact />
    </AppContainer>
  );
}

export default App;
