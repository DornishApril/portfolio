import React, { useState } from "react";
import Projects from "./components/Projects";
import MLTutorial from "./components/MLTutorial";
import Contact from "./components/Contact";
import {
  AppContainer,
  Header,
  Name,
  StarryBackground,
  Star,
  FallingStar,
  ScrollButton,
  Sparkle,
  BigSparkle,
} from "./styles/AppStyles";

function App() {
  const [showContent, setShowContent] = useState(false);

  // Generate 800 static stars with varying sizes
  const stars = Array.from({ length: 800 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    duration: 2 + Math.random() * 4,
    size: Math.random() * 2 + 1,
  }));

  // Generate 100 sparkles
  const sparkles = Array.from({ length: 100 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    duration: 2 + Math.random() * 3,
    size: Math.random() * 2 + 1,
  }));

  // Generate 50 big sparkles
  const bigSparkles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    duration: 3 + Math.random() * 4,
    size: Math.random() * 3 + 2,
  }));

  // Generate 300 falling stars with varying sizes and dramatic effects
  const fallingStars = Array.from({ length: 300 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    animationDelay: `${Math.random() * 5}s`,
    duration: 2 + Math.random() * 4,
    size: Math.random() * 2 + 1,
    dramatic: Math.random() > 0.7, // 30% chance of being dramatic
  }));

  const handleScroll = () => {
    setShowContent(true);
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

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
          {sparkles.map((sparkle) => (
            <Sparkle
              key={sparkle.id}
              style={{
                left: sparkle.left,
                top: sparkle.top,
                animationDuration: `${sparkle.duration}s`,
                size: sparkle.size,
              }}
            />
          ))}
          {bigSparkles.map((sparkle) => (
            <BigSparkle
              key={sparkle.id}
              style={{
                left: sparkle.left,
                top: sparkle.top,
                animationDuration: `${sparkle.duration}s`,
                size: sparkle.size,
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
                size: star.size,
                dramatic: star.dramatic,
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
        <ScrollButton
          onClick={handleScroll}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          Explore My Universe
        </ScrollButton>
      </Header>
      {showContent && (
        <>
          <Projects />
          <MLTutorial />
          <Contact />
        </>
      )}
    </AppContainer>
  );
}

export default App;
