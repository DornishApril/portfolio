import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const ContactSection = styled.section`
  padding: 100px 20px;
  background: rgba(10, 25, 47, 0.8);
`;

const ContactContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
`;

const SectionTitle = styled.h2`
  color: #64ffda;
  font-size: 2.5rem;
  margin-bottom: 50px;
`;

const ContactText = styled.p`
  color: #8892b0;
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: 40px;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-top: 40px;
`;

const SocialLink = styled(motion.a)`
  color: #64ffda;
  font-size: 2rem;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #ffffff;
  }
`;

const Contact = () => {
  return (
    <ContactSection>
      <ContactContainer>
        <SectionTitle>Get In Touch</SectionTitle>
        <ContactText>
          I'm currently open to new opportunities and collaborations. Feel free
          to reach out if you'd like to connect!
        </ContactText>
        <SocialLinks>
          <SocialLink
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaGithub />
          </SocialLink>
          <SocialLink
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaLinkedin />
          </SocialLink>
          <SocialLink
            href="mailto:your.email@example.com"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaEnvelope />
          </SocialLink>
        </SocialLinks>
      </ContactContainer>
    </ContactSection>
  );
};

export default Contact;
