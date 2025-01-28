import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import bgTexture from '../assets/bg-texture.png'
import profileImage from '../assets/joabe-profile.jpg'

interface AboutProps {}

const AboutWrapper = styled(motion.div)`
  max-width: 1200px;
  margin: 0 auto;
  padding: 80px 1rem 2rem;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: url(${bgTexture}) no-repeat center center;
  background-size: cover;

  @media (max-width: 768px) {
    padding: 80px 1rem 2rem;
  }
`

const AboutTitle = styled.h1`
  font-size: 1.8rem;
  color: #6a11cb;
  margin-bottom: 1rem;
  font-weight: 600;
  letter-spacing: -0.03em;
  line-height: 1.2;
  opacity: 0.9;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`

const AboutSection = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;
  width: 100%;
  
  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 2rem;
  }
`

const AboutImage = styled.div`
  flex: 1;
  max-width: 400px;
  border-radius: 50%;
  border: 2px solid #6a11cb;
  overflow: hidden;
  aspect-ratio: 1/1;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }

  @media (max-width: 1024px) {
    max-width: 300px;
  }
`

const AboutContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

const AboutSubtitle = styled.h2`
  font-size: 1.5rem;
  color: rgba(0,0,0,0.7);
  font-weight: 500;
  letter-spacing: -0.02em;
  line-height: 1.3;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`

const AboutDescription = styled.p`
  font-size: 1.1rem;
  color: rgba(0,0,0,0.8);
  line-height: 1.7;
  font-weight: 400;
  letter-spacing: -0.02em;
  text-align: justify;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`

const TeamSection = styled.div`
  margin-top: 4rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  width: 100%;
  margin-top: 2rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const TeamMemberCard = styled(motion.div)`
  background-color: rgba(255,255,255,0.9);
  border-radius: 15px;
  border: 2px solid #6a11cb;
  padding: 2rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-10px);
  }
`

const TeamMemberImage = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 3px solid #6a11cb;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const TeamMemberName = styled.h3`
  font-size: 1.5rem;
  color: #6a11cb;
  font-weight: 700;
  letter-spacing: -0.03em;
`

const TeamMemberRole = styled.p`
  font-size: 1.1rem;
  color: rgba(0,0,0,0.7);
  font-weight: 400;
  letter-spacing: -0.02em;
`

const ContactButton = styled(motion.button)`
  background-color: #6a11cb;  // Roxo
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  letter-spacing: -0.02em;

  &:hover {
    background-color: #4a148c;  // Roxo mais escuro
    transform: scale(1.05);
  }
`

const CopyrightNotice = styled.div`
  margin-top: 2rem;
  font-size: 0.9rem;
  color: #6a11cb;
  opacity: 0.7;

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`

const About: React.FC<AboutProps> = () => {
  return (
    <AboutWrapper
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <AboutSection>
        <AboutImage>
          <img src={profileImage} alt="Joabe Alves" />
        </AboutImage>
        <AboutContent>
          <AboutTitle>Sobre Mim</AboutTitle>
          <AboutSubtitle>Desenvolvedor apaixonado por tecnologia</AboutSubtitle>
          <AboutDescription>
            Olá! Sou Joabe Alves, desenvolvedor apaixonado por tecnologia. 
            Transformo ideias em soluções digitais criativas e funcionais.
          </AboutDescription>
          <AboutDescription>
            Especializado em desenvolvimento web, busco constantemente 
            aprimorar minhas habilidades em tecnologias modernas como 
            React, TypeScript e outras ferramentas de ponta.
          </AboutDescription>
          <CopyrightNotice>
            2025 Todos os direitos reservados a Joabe Alves
          </CopyrightNotice>
        </AboutContent>
      </AboutSection>
    </AboutWrapper>
  )
}

export default About
