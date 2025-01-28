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

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  width: 100%;
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
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  line-height: 1.8;
  color: #333;
  opacity: 0.9;
  text-align: justify;
`

const PersonalStory = styled(motion.div)`
  background-color: rgba(106, 17, 203, 0.05);
  border-left: 4px solid #6a11cb;
  padding: 1.5rem;
  margin: 1rem 0;
  font-style: italic;
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

const pageVariants = {
  initial: { 
    opacity: 0, 
    x: '-100vw' 
  },
  in: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.7,
      type: 'spring',
      stiffness: 50,
      when: 'beforeChildren',
      staggerChildren: 0.3
    }
  },
  out: { 
    opacity: 0, 
    x: '100vw',
    transition: {
      duration: 0.5
    }
  }
}

const sectionVariants = {
  initial: { 
    opacity: 0, 
    scale: 0.9 
  },
  in: { 
    opacity: 1, 
    scale: 1,
    transition: {
      duration: 0.6,
      type: 'spring',
      stiffness: 80
    }
  }
}

const imageVariants = {
  initial: { 
    opacity: 0, 
    rotate: -10,
    scale: 0.8 
  },
  in: { 
    opacity: 1, 
    rotate: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      type: 'spring',
      stiffness: 60
    }
  },
  hover: {
    scale: 1.1,
    rotate: 5,
    transition: { 
      duration: 0.3 
    }
  }
}

const itemVariants = {
  hidden: { 
    opacity: 0, 
    scale: 0.9,
    y: 50 
  },
  visible: { 
    opacity: 1, 
    scale: 1,
    y: 0,
    transition: {
      duration: 0.5,
      type: 'spring',
      stiffness: 120
    }
  }
}

const About: React.FC<AboutProps> = () => {
  return (
    <AboutWrapper
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
    >
      <AboutContainer
        variants={sectionVariants}
      >
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.6,
            type: 'spring',
            stiffness: 100 
          }}
        >
          Sobre Mim
        </motion.h1>

        <AboutSection>
          <AboutImage>
            <motion.img 
              src={profileImage} 
              alt="Joabe Alves" 
              variants={imageVariants}
              whileHover="hover"
            />
          </AboutImage>

          <AboutContent>
            <motion.p
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ 
                duration: 0.5, 
                delay: 0.3,
                type: 'spring',
                stiffness: 100 
              }}
            >
              Olá! Sou Joabe, um desenvolvedor apaixonado por transformar ideias em experiências digitais incríveis. 
              Minha jornada no mundo da tecnologia começou não como um plano calculado, mas como uma aventura 
              alimentada por curiosidade e uma sede de aprender.
            </motion.p>

            <PersonalStory
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.5, 
                delay: 0.5,
                type: 'spring',
                stiffness: 100 
              }}
            >
              "Cada linha de código que escrevo é uma oportunidade de criar algo que pode mudar a vida de alguém. 
              Não sou apenas um desenvolvedor, sou um artesão digital que transforma sonhos em realidade."
            </PersonalStory>

            <motion.p
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ 
                duration: 0.5, 
                delay: 0.7,
                type: 'spring',
                stiffness: 100 
              }}
            >
              Comecei minha carreira com uma mistura de fascínio e desafio. Cada projeto não é apenas um trabalho, 
              mas uma oportunidade de resolver problemas únicos e criar soluções que realmente fazem a diferença. 
              Minha especialidade? Desenvolver websites que não são apenas bonitos, mas verdadeiramente funcionais 
              e centrados no usuário.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.5, 
                delay: 0.9,
                type: 'spring',
                stiffness: 100 
              }}
            >
              <h3>Meus Valores</h3>
              <ul>
                <li> Inovação constante</li>
                <li> Colaboração genuína</li>
                <li> Aprendizado contínuo</li>
                <li> Foco no impacto humano</li>
              </ul>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ 
                duration: 0.5, 
                delay: 1.1,
                type: 'spring',
                stiffness: 100 
              }}
            >
              Hoje, trabalho com uma missão clara: ajudar empreendedores e empresas a conquistarem o mundo digital. 
              Cada projeto é uma parceria, onde sua visão se encontra com minha expertise para criar algo 
              verdadeiramente extraordinário.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.5, 
                delay: 1.3,
                type: 'spring',
                stiffness: 100 
              }}
            >
              <h3>Vamos Transformar Sua Ideia em Realidade?</h3>
              <p>
                Se você está buscando mais do que um desenvolvedor - mas um parceiro que realmente entende 
                sua visão - estou pronto para embarcar nessa jornada com você. Vamos criar algo incrível juntos! 
              </p>
            </motion.div>
          </AboutContent>
        </AboutSection>
      </AboutContainer>
    </AboutWrapper>
  )
}

export default About
