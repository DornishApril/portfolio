import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";

export const AppContainer = styled.div`
  min-height: 100vh;
  background: #0a0f1c;
  color: #ffffff;
  overflow-x: hidden;
  position: relative;
`;

export const Header = styled(motion.header)`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
`;

export const Name = styled(motion.h1)`
  font-size: 4rem;
  font-weight: bold;
  text-align: center;
  z-index: 1;
  color: #ffffff;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
  margin-bottom: 2rem;
`;

export const ScrollButton = styled(motion.button)`
  background: transparent;
  border: 2px solid rgba(255, 255, 255, 0.2);
  color: #ffffff;
  padding: 1rem 2rem;
  font-size: 1.2rem;
  border-radius: 30px;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 1;
  backdrop-filter: blur(5px);

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.3);
    transform: translateY(-2px);
  }
`;

export const StarryBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at center, #1a1f2e 0%, #0a0f1c 100%);
  overflow: hidden;
  z-index: 0;
`;

const twinkle = keyframes`
  0%, 100% { opacity: 0.3; }
  50% { opacity: 1; }
`;

const sparkle = keyframes`
  0%, 100% { 
    transform: scale(1);
    opacity: 0.3;
  }
  50% { 
    transform: scale(1.5);
    opacity: 1;
  }
`;

const bigSparkle = keyframes`
  0%, 100% { 
    transform: scale(1) rotate(0deg);
    opacity: 0.2;
  }
  50% { 
    transform: scale(2) rotate(180deg);
    opacity: 1;
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

const dramaticFallingStar = keyframes`
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
    transform: translateY(100%) translateX(200px) rotate(45deg);
    opacity: 0;
  }
`;

export const Star = styled.div`
  position: absolute;
  width: ${(props) => props.size || 1}px;
  height: ${(props) => props.size || 1}px;
  background: #ffffff;
  border-radius: 50%;
  box-shadow: 0 0 ${(props) => props.size * 2 || 4}px #ffffff;
  animation: ${twinkle} ${(props) => props.duration || 4}s infinite;
  opacity: 0.3;
`;

export const Sparkle = styled.div`
  position: absolute;
  width: ${(props) => props.size || 2}px;
  height: ${(props) => props.size || 2}px;
  background: #ffffff;
  border-radius: 50%;
  box-shadow: 0 0 ${(props) => props.size * 3 || 6}px #ffffff;
  animation: ${sparkle} ${(props) => props.duration || 3}s infinite;
  opacity: 0.3;
`;

export const BigSparkle = styled.div`
  position: absolute;
  width: ${(props) => props.size || 4}px;
  height: ${(props) => props.size || 4}px;
  background: #ffffff;
  border-radius: 50%;
  box-shadow: 0 0 ${(props) => props.size * 4 || 16}px #ffffff;
  animation: ${bigSparkle} ${(props) => props.duration || 5}s infinite;
  opacity: 0.2;
`;

export const Planet = styled.div`
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

export const FallingStar = styled.div`
  position: absolute;
  width: ${(props) => props.size || 1}px;
  height: ${(props) => props.size || 1}px;
  background: #ffffff;
  border-radius: 50%;
  box-shadow: 0 0 ${(props) => props.size * 4 || 4}px #ffffff;
  animation: ${(props) => (props.dramatic ? dramaticFallingStar : fallingStar)}
    ${(props) => props.duration || 3}s linear infinite;
  opacity: 0;
`;
