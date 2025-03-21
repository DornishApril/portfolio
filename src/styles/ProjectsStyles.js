import styled from "styled-components";
import { motion } from "framer-motion";

export const ProjectsSection = styled.section`
  padding: 100px 20px;
  position: relative;
  overflow: hidden;
  background: transparent;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(
      circle at 50% 50%,
      rgba(0, 0, 139, 0.03) 0%, /* Dark blue tone */
      transparent 50%
    );
    pointer-events: none;
  }
`;

export const ProjectsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;
  position: relative;
  z-index: 1;
`;

export const ProjectCard = styled(motion.div)`
  background: rgba(0, 0, 139, 0.1); /* Dark blue tone */
  border-radius: 15px;
  padding: 30px;
  backdrop-filter: blur(5px);
  border: 1px solid rgba(0, 0, 139, 0.2); /* Dark blue tone */
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
      rgba(0, 0, 139, 0.2) 0%, /* Dark blue tone */
      transparent 70%
    );
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 30px rgba(0, 0, 139, 0.3); /* Dark blue tone */
    border-color: rgba(0, 0, 139, 0.4); /* Dark blue tone */
    background: rgba(0, 0, 139, 0.15); /* Dark blue tone */

    &::before {
      opacity: 1;
    }
  }
`;

export const ProjectTitle = styled.h2`
  color: #4682B4; /* Steel blue */
  margin-bottom: 15px;
  font-size: 1.5rem;
  text-shadow: 0 0 10px rgba(70, 130, 180, 0.3);
  position: relative;
  z-index: 1;
`;

export const ProjectDescription = styled.p`
  color: #B0C4DE; /* Light steel blue */
  line-height: 1.6;
  margin-bottom: 20px;
  position: relative;
  z-index: 1;
`;

export const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 20px;
  position: relative;
  z-index: 1;
`;

export const TechTag = styled.span`
  background: rgba(70, 130, 180, 0.1); /* Steel blue */
  color: #4682B4; /* Steel blue */
  padding: 5px 10px;
  border-radius: 15px;
  font-size: 0.9rem;
  border: 1px solid rgba(70, 130, 180, 0.15); /* Steel blue */
  transition: all 0.3s ease;

  &:hover {
    background: rgba(70, 130, 180, 0.15); /* Steel blue */
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(70, 130, 180, 0.2); /* Steel blue */
  }
`;
