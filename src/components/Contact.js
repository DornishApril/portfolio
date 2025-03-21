import React from "react";
import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const twinkle = keyframes`
  0%, 100% { opacity: 0.3; }
  50% { opacity: 1; }
`;

const ContactSection = styled.section`
  padding: 100px 20px;
  background: rgba(10, 15, 28, 0.95);
  position: relative;
  overflow: hidden;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StarryOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  z-index: 1;
`;

const Star = styled.div`
  position: absolute;
  width: ${(props) => props.size || 1}px;
  height: ${(props) => props.size || 1}px;
  background: #ffffff;
  border-radius: 50%;
  box-shadow: 0 0 ${(props) => props.size * 2 || 4}px #ffffff;
  animation: ${twinkle} ${(props) => props.duration || 4}s infinite;
  opacity: 0.3;
  left: ${(props) => props.left || "0%"};
  top: ${(props) => props.top || "0%"};
`;

const ContactContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  position: relative;
  z-index: 2;
  background: rgba(20, 25, 38, 0.7);
  padding: 40px;
  border-radius: 20px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.3);
`;

const SectionTitle = styled.h2`
  color: #64ffda;
  font-size: 2.5rem;
  margin-bottom: 50px;
  text-shadow: 0 0 10px rgba(100, 255, 218, 0.3);
`;

const ContactText = styled.p`
  color: #8892b0;
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: 40px;
  text-shadow: 0 0 5px rgba(136, 146, 176, 0.2);
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
  transition: all 0.3s ease;
  padding: 15px;
  border-radius: 50%;
  background: rgba(100, 255, 218, 0.1);
  border: 1px solid rgba(100, 255, 218, 0.2);

  &:hover {
    color: #ffffff;
    background: rgba(100, 255, 218, 0.2);
    border-color: rgba(100, 255, 218, 0.4);
    box-shadow: 0 0 20px rgba(100, 255, 218, 0.3);
  }
`;

const Contact = () => {
  // Generate stars for the background
  const stars = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    duration: 2 + Math.random() * 4,
    size: Math.random() * 2 + 1,
  }));

  return (
    <ContactSection>
      <StarryOverlay>
        {stars.map((star) => (
          <Star
            key={star.id}
            left={star.left}
            top={star.top}
            duration={star.duration}
            size={star.size}
          />
        ))}
      </StarryOverlay>
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
