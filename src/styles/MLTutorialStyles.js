import styled from "styled-components";
import { motion } from "framer-motion";

export const TutorialSection = styled.section`
  padding: 100px 20px;
  position: relative;
  overflow: hidden;
  min-height: 100vh;
  display: flex;
  align-items: center;
  z-index: 1;
`;

export const TutorialContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

export const SectionTitle = styled.h2`
  color: #4a90e2;
  text-align: center;
  font-size: 3rem;
  margin-bottom: 70px;
  text-shadow: 0 0 15px rgba(74, 144, 226, 0.4);
  position: relative;
  z-index: 1;
`;

export const GifGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  gap: 60px;
  margin-top: 60px;
  position: relative;
  z-index: 1;
`;

export const GifCard = styled(motion.div)`
  background: rgba(5, 10, 20, 0.8);
  border-radius: 25px;
  padding: 40px;
  backdrop-filter: blur(15px);
  border: 2px solid rgba(0, 191, 255, 0.15);
  text-align: center;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  min-height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(
      circle at 50% 50%,
      rgba(0, 191, 255, 0.15) 0%,
      transparent 70%
    );
    opacity: 0;
    transition: opacity 0.4s ease;
  }

  &::after {
    content: "";
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: linear-gradient(
      45deg,
      transparent,
      rgba(0, 191, 255, 0.1),
      transparent
    );
    transform: rotate(45deg);
    transition: transform 0.6s ease;
  }

  &:hover {
    transform: translateY(-15px) scale(1.02);
    box-shadow: 0 20px 50px rgba(0, 191, 255, 0.25);
    border-color: rgba(0, 191, 255, 0.5);
    background: rgba(5, 10, 20, 0.9);

    &::before {
      opacity: 1;
    }

    &::after {
      transform: rotate(45deg) translate(50%, 50%);
    }
  }
`;

export const GifImage = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: 20px;
  margin-bottom: 30px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.4);
  position: relative;
  z-index: 1;
  transition: transform 0.4s ease;

  ${GifCard}:hover & {
    transform: scale(1.05);
  }
`;

export const GifTitle = styled.h3`