import React from "react";
import Projects from "./components/Projects";
import MLTutorial from "./components/MLTutorial";
import Contact from "./components/Contact";
import {
  AppContainer,
  Header,
  Name,
  StarryBackground,
  Star,
  Planet,
  FallingStar,
} from "./styles/AppStyles";

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
