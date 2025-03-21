import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const TutorialSection = styled.section`
  padding: 100px 20px;
  background: rgba(10, 25, 47, 0.8);
`;

const TutorialContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  color: #64ffda;
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 50px;
`;

const GifGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;
  margin-top: 50px;
`;

const GifCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 15px;
  padding: 20px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  text-align: center;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 30px rgba(100, 255, 218, 0.2);
  }
`;

const GifImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
  margin-bottom: 15px;
`;

const GifTitle = styled.h3`
  color: #64ffda;
  margin-bottom: 10px;
`;

const GifDescription = styled.p`
  color: #8892b0;
  line-height: 1.6;
`;

const MLTutorial = () => {
  const gifs = [
    {
      src: "/src/gifs/img_fitting.gif",
      title: "Image Fitting",
      description:
        "Demonstration of image fitting techniques using machine learning algorithms.",
    },
    {
      src: "/src/gifs/linear_regression.gif",
      title: "Linear Regression",
      description:
        "Visualization of linear regression model training and prediction.",
    },
    {
      src: "/src/gifs/neural_network_curve_fitting.gif",
      title: "Neural Network Curve Fitting",
      description:
        "Neural network learning to fit complex curves through training iterations.",
    },
  ];

  return (
    <TutorialSection>
      <TutorialContainer>
        <SectionTitle>Machine Learning Tutorial</SectionTitle>
        <GifGrid>
          {gifs.map((gif, index) => (
            <GifCard
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <GifImage src={gif.src} alt={gif.title} />
              <GifTitle>{gif.title}</GifTitle>
              <GifDescription>{gif.description}</GifDescription>
            </GifCard>
          ))}
        </GifGrid>
      </TutorialContainer>
    </TutorialSection>
  );
};

export default MLTutorial;
