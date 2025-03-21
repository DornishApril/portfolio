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
  width: ${(props) => props.size || 1}px;
  height: ${(props) => props.size || 1}px;
  background: #ffffff;
  border-radius: 50%;
  box-shadow: 0 0 ${(props) => props.size * 2 || 4}px #ffffff;
  animation: ${twinkle} ${(props) => props.duration || 4}s infinite;
  opacity: 0.3;
`;

const Planet = styled.div`
  position: absolute;
  width: ${(props) => props.size || 20}px;
  height: ${(props) => props.size || 20}px;
  border-radius: 50%;
  opacity: 0.8;
  box-shadow: 0 0 ${(props) => props.size * 2 || 40}px
    ${(props) => props.color || "#4a90e2"};
  background: ${(props) => {
    switch (props.texture) {
      case "gas":
        return `radial-gradient(circle at 30% 30%, 
          rgba(255, 255, 255, 0.2) 0%,
          ${props.color} 50%,
          rgba(0, 0, 0, 0.3) 100%)`;
      case "rocky":
        return `radial-gradient(circle at 30% 30%, 
          rgba(255, 255, 255, 0.3) 0%,
          ${props.color} 40%,
          rgba(0, 0, 0, 0.4) 100%),
          repeating-linear-gradient(45deg,
            rgba(255, 255, 255, 0.1) 0px,
            rgba(255, 255, 255, 0.1) 1px,
            transparent 1px,
            transparent 2px)`;
      case "ice":
        return `radial-gradient(circle at 30% 30%, 
          rgba(255, 255, 255, 0.4) 0%,
          ${props.color} 40%,
          rgba(0, 0, 0, 0.3) 100%),
          radial-gradient(circle at 70% 70%,
            rgba(255, 255, 255, 0.2) 0%,
            transparent 50%)`;
      default:
        return props.color;
    }
  }};
  animation: ${(props) =>
    props.rotation ? "rotate 20s linear infinite" : "none"};

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
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
  // Generate 800 static stars with varying sizes
  const stars = Array.from({ length: 800 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    duration: 2 + Math.random() * 4,
    size: Math.random() * 2 + 1,
  }));

  // Generate 200 falling stars
  const fallingStars = Array.from({ length: 200 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    animationDelay: `${Math.random() * 5}s`,
    duration: 2 + Math.random() * 3,
  }));

  // Updated planets with textures
  const planets = [
    {
      id: 1,
      color: "#4a90e2",
      size: 20,
      left: "10%",
      top: "20%",
      texture: "gas",
      rotation: true,
    },
    {
      id: 2,
      color: "#e24a4a",
      size: 15,
      left: "80%",
      top: "30%",
      texture: "rocky",
      rotation: true,
    },
    {
      id: 3,
      color: "#4ae24a",
      size: 25,
      left: "30%",
      top: "70%",
      texture: "ice",
      rotation: true,
    },
    {
      id: 4,
      color: "#e2e24a",
      size: 18,
      left: "70%",
      top: "80%",
      texture: "gas",
      rotation: true,
    },
    {
      id: 5,
      color: "#e24ae2",
      size: 22,
      left: "50%",
      top: "40%",
      texture: "rocky",
      rotation: true,
    },
  ];

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
                size: star.size,
              }}
            />
          ))}
          {planets.map((planet) => (
            <Planet
              key={planet.id}
              style={{
                left: planet.left,
                top: planet.top,
                color: planet.color,
                size: planet.size,
                texture: planet.texture,
                rotation: planet.rotation,
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
