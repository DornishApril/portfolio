import React from "react";
import { motion } from "framer-motion";
import {
  ProjectsSection,
  ProjectsContainer,
  ProjectCard,
  ProjectTitle,
  ProjectDescription,
  TechStack,
  TechTag,
} from "../styles/ProjectsStyles";

const projects = [
  {
    id: 1,
    title: "Project 1",
    description: "Description of project 1",
    tech: ["React", "Node.js", "MongoDB"],
  },
  {
    id: 2,
    title: "Project 2",
    description: "Description of project 2",
    tech: ["Python", "Django", "PostgreSQL"],
  },
  {
    id: 3,
    title: "Project 3",
    description: "Description of project 3",
    tech: ["Vue.js", "Express", "MySQL"],
  },
];

const Projects = () => {
  return (
    <ProjectsSection>
      <ProjectsContainer>
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <ProjectTitle>{project.title}</ProjectTitle>
            <ProjectDescription>{project.description}</ProjectDescription>
            <TechStack>
              {project.tech.map((tech, index) => (
                <TechTag key={index}>{tech}</TechTag>
              ))}
            </TechStack>
          </ProjectCard>
        ))}
      </ProjectsContainer>
    </ProjectsSection>
  );
};

export default Projects;
