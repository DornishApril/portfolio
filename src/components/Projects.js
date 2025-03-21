import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const ProjectsSection = styled.section`
  padding: 100px 20px;
  background: rgba(10, 25, 47, 0.8);
`;

const ProjectsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;
`;

const ProjectCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 15px;
  padding: 30px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 30px rgba(100, 255, 218, 0.2);
  }
`;

const ProjectTitle = styled.h2`
  color: #64ffda;
  margin-bottom: 15px;
  font-size: 1.5rem;
`;

const ProjectDescription = styled.p`
  color: #8892b0;
  line-height: 1.6;
  margin-bottom: 20px;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 20px;
`;

const TechTag = styled.span`
  background: rgba(100, 255, 218, 0.1);
  color: #64ffda;
  padding: 5px 10px;
  border-radius: 15px;
  font-size: 0.9rem;
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
