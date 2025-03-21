import React, { useEffect, useState } from "react";
import {
  ProjectsSection,
  ProjectsContainer,
  SectionTitle,
  ProjectGrid,
  ProjectCard,
  ProjectImage,
  ProjectTitle,
  ProjectDescription,
  TechStack,
  TechTag,
} from "../styles/ProjectsStyles";
import { motion } from "framer-motion";
import { generatePlaceholderImage } from "../utils/generatePlaceholderImages";

const projects = [
  {
    title: "AI Image Generator",
    description:
      "A powerful AI-powered image generation tool that creates unique artwork from text descriptions using advanced machine learning models.",
    tech: ["React", "Node.js", "TensorFlow", "MongoDB"],
  },
  {
    title: "Neural Network Visualizer",
    description:
      "An interactive visualization tool for understanding and exploring neural network architectures and their training processes.",
    tech: ["Python", "TensorFlow", "Flask", "D3.js"],
  },
  {
    title: "ML Model Trainer",
    description:
      "A comprehensive platform for training, testing, and deploying machine learning models with real-time performance metrics.",
    tech: ["JavaScript", "Express", "PostgreSQL", "PyTorch"],
  },
];

const Projects = () => {
  const [projectImages, setProjectImages] = useState({});

  useEffect(() => {
    // Generate images for each project
    const images = {};
    projects.forEach((project) => {
      images[project.title] = generatePlaceholderImage(800, 400, project.title);
    });
    setProjectImages(images);
  }, []);

  return (
    <ProjectsSection>
      <ProjectsContainer>
        <SectionTitle>My Projects</SectionTitle>
        <ProjectGrid>
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <ProjectImage
                src={projectImages[project.title]}
                alt={project.title}
              />
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
              <TechStack>
                {project.tech.map((tech, techIndex) => (
                  <TechTag key={techIndex}>{tech}</TechTag>
                ))}
              </TechStack>
            </ProjectCard>
          ))}
        </ProjectGrid>
      </ProjectsContainer>
    </ProjectsSection>
  );
};

export default Projects;
