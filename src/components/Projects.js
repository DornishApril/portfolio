import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const ProjectsSection = styled.section`
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

const ProjectsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;
  position: relative;
  z-index: 1;
`;

const ProjectCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.02);
  border-radius: 15px;
  padding: 30px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.05);
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

const ProjectTitle = styled.h2`
  color: #64ffda;
  margin-bottom: 15px;
  font-size: 1.5rem;
  text-shadow: 0 0 10px rgba(100, 255, 218, 0.3);
  position: relative;
  z-index: 1;
`;

const ProjectDescription = styled.p`
  color: #94a3b8;
  line-height: 1.6;
  margin-bottom: 20px;
  position: relative;
  z-index: 1;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 20px;
  position: relative;
  z-index: 1;
`;

const TechTag = styled.span`
  background: rgba(100, 255, 218, 0.05);
  color: #64ffda;
  padding: 5px 10px;
  border-radius: 15px;
  font-size: 0.9rem;
  border: 1px solid rgba(100, 255, 218, 0.1);
  transition: all 0.3s ease;

  &:hover {
    background: rgba(100, 255, 218, 0.1);
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(100, 255, 218, 0.1);
  }
`;

const Projects = () => {
  const projects = [
    {
      title: "Project 1",
      description:
        "A full-stack web application built with React and Node.js. Features include user authentication, real-time updates, and responsive design.",
      tech: ["React", "Node.js", "MongoDB", "Express"],
    },
    {
      title: "Project 2",
      description:
        "An AI-powered image recognition system that can identify and classify objects in real-time using deep learning models.",
      tech: ["Python", "TensorFlow", "OpenCV", "Flask"],
    },
    {
      title: "Project 3",
      description:
        "A mobile-first progressive web app for task management with offline capabilities and push notifications.",
      tech: ["React", "PWA", "IndexedDB", "Service Workers"],
    },
  ];

  return (
    <ProjectsSection>
      <ProjectsContainer>
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <ProjectTitle>{project.title}</ProjectTitle>
            <ProjectDescription>{project.description}</ProjectDescription>
            <TechStack>
              {project.tech.map((tech, techIndex) => (
                <TechTag key={techIndex}>{tech}</TechTag>
              ))}
            </TechStack>
          </ProjectCard>
        ))}
      </ProjectsContainer>
    </ProjectsSection>
  );
};

export default Projects;
