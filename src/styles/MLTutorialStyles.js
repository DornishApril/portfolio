import styled from "styled-components";
import { motion } from "framer-motion";

export const TutorialSection = styled.section`
  padding: 100px 20px;
  background: linear-gradient(
    135deg,
    rgba(10, 15, 28, 0.95) 0%,
    rgba(26, 31, 46, 0.95) 100%
  );
  backdrop-filter: blur(10px);
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(
      circle at 50% 50%,
      rgba(255, 255, 255, 0.05) 0%,
      transparent 50%
    );
    pointer-events: none;
  }
`;

export const TutorialContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

export const SectionTitle = styled.h2`
  color: #64ffda;
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 50px;
  text-shadow: 0 0 10px rgba(100, 255, 218, 0.3);
  position: relative;
  z-index: 1;
`;

export const GifGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;
  margin-top: 50px;
  position: relative;
  z-index: 1;
`;

export const GifCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.02);
  border-radius: 15px;
  padding: 20px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.05);
  text-align: center;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(
      circle at 50% 50%,
      rgba(100, 255, 218, 0.05) 0%,
      transparent 70%
    );
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 30px rgba(100, 255, 218, 0.15);
    border-color: rgba(100, 255, 218, 0.2);

    &::before {
      opacity: 1;
    }
  }
`;

export const GifImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
  margin-bottom: 15px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  position: relative;
  z-index: 1;
`;

export const GifTitle = styled.h3`
  color: #64ffda;
  margin-bottom: 10px;
  text-shadow: 0 0 10px rgba(100, 255, 218, 0.2);
  position: relative;
  z-index: 1;
`;

export const GifDescription = styled.p`
  color: #94a3b8;
  line-height: 1.6;
  position: relative;
  z-index: 1;
`;
