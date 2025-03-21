import React from "react";
import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";
import Projects from "./components/Projects";
import MLTutorial from "./components/MLTutorial";
import Contact from "./components/Contact";

const AppContainer = styled.div`
  min-height: 100vh;
  background: #0a0f1c;
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
  color: #ffffff;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
`;

const StarryBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at center, #1a1f2e 0%, #0a0f1c 100%);
  overflow: hidden;
`;

const twinkle = keyframes`
  0%, 100% { opacity: 0.3; }
  50% { opacity: 1; }
`;

const Star = styled.div`
  position: absolute;
  width: 1px;
  height: 1px;
  background: #ffffff;
  border-radius: 50%;
  box-shadow: 0 0 4px #ffffff;
  animation: ${twinkle} ${(props) => props.duration || 4}s infinite;
  opacity: 0.3;
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
  width: 1px;
  height: 1px;
  background: #ffffff;
  border-radius: 50%;
  box-shadow: 0 0 4px #ffffff;
  animation: ${fallingStar} ${(props) => props.duration || 3}s linear infinite;
  opacity: 0;
`;

function App() {
  // Generate 400 static stars
  const stars = Array.from({ length: 400 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    duration: 2 + Math.random() * 4,
  }));

  // Generate 100 falling stars
  const fallingStars = Array.from({ length: 100 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    animationDelay: `${Math.random() * 5}s`,
    duration: 2 + Math.random() * 3,
  }));

  return (
    <AppContainer>
      <Header>
        <StarryBackground>
          {stars.map((star) => (
            <Star
              key={star.id}
              style={{
                left: star.left,
                top: star.top,
                animationDuration: `${star.duration}s`,
              }}
            />
          ))}
          {fallingStars.map((star) => (
            <FallingStar
              key={star.id}
              style={{
                left: star.left,
                animationDelay: star.animationDelay,
                animationDuration: `${star.duration}s`,
              }}
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
