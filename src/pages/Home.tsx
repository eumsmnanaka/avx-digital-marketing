import React from 'react'
import styled from 'styled-components'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  FaCode, 
  FaMobileAlt, 
  FaChartLine,
  FaRocket,
  FaCheckCircle
} from 'react-icons/fa'
import bgTexture from '../assets/bg-texture.png'

const HomeWrapper = styled(motion.div)`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 1rem;
  position: relative;
  overflow-x: hidden;
  background: url(${bgTexture}) no-repeat center center;
  background-size: cover;
  color: ${props => props.theme.colors.text};
`

const HeroSection = styled(motion.section)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 100vh;
  padding: 2rem 0;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    padding: 2rem 1rem;
  }
`

const HeroContent = styled(motion.div)`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  max-width: 800px;
  margin: 0 auto;
  z-index: 1;

  @media (max-width: 768px) {
    gap: 1rem;
    padding: 0 1rem;
  }
`

const MainTitle = styled(motion.h1)`
  font-size: 4rem;
  font-weight: 700;
  color: ${props => props.theme.colors.text};
  text-align: center;
  width: 100%;
  letter-spacing: -1px;
  margin-top: 2rem;

  @media (max-width: 768px) {
    font-size: 2.5rem;
    margin-top: 1rem;
  }
`

const Subtitle = styled(motion.p)`
  font-size: 1.5rem;
  color: ${props => props.theme.colors.text};
  text-align: center;
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`

const ButtonGroup = styled(motion.div)`
  display: flex;
  justify-content: center;
  gap: 1rem;
  width: 100%;
`

const PrimaryButton = styled(motion.a)`
  color: ${props => props.theme.colors.text};
  border: 2px solid ${props => props.theme.colors.primary};
  padding: 10px 22px;
  border-radius: 12px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
  text-decoration: none;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${props => props.theme.colors.primary};
    color: white;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(120deg, transparent, rgba(106, 17, 203, 0.2), transparent);
    transition: all 0.5s ease;
  }

  &:hover::before {
    left: 100%;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(120deg, transparent, rgba(106, 17, 203, 0.1), transparent);
    transition: all 0.5s ease;
    opacity: 0;
  }

  &:hover::after {
    opacity: 1;
  }
`

const BenefitsList = styled(motion.div)`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const BenefitItem = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: ${props => props.theme.colors.text};
  opacity: 0.8;
  transition: all 0.3s ease;

  &:hover {
    opacity: 1;
    transform: translateX(10px);
  }
`

const HeroImage = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  
  @media (max-width: 768px) {
    margin-top: 2rem;
  }
`

const LogoContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: relative;
`

const ServicesSection = styled(motion.section)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  padding: 2rem;
  width: 100%;
  background-color: ${props => props.theme.colors.background};

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
    padding: 1rem;
  }
`

const ServiceCard = styled(motion.div)`
  background-color: white;
  border: 2px solid #6a11cb;
  border-radius: 15px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-10px);
  }
`

const ServiceIcon = styled(motion.div)`
  font-size: 2.5rem;
  color: #6a11cb;
  margin-bottom: 1rem;
`

const ServiceTitle = styled(motion.h3)`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  font-weight: 600;
  color: #6a11cb;
`

const ServiceDescription = styled(motion.p)`
  color: rgba(0,0,0,0.7);
  font-size: 0.9rem;
`

const Home: React.FC = () => {
  const services = [
    {
      icon: FaCode,
      title: 'Desenvolvimento Web',
      description: 'Criamos sites modernos e responsivos que se destacam.'
    },
    {
      icon: FaMobileAlt,
      title: 'Design Responsivo',
      description: 'Seu site perfeito em qualquer dispositivo.'
    },
    {
      icon: FaChartLine,
      title: 'Otimização SEO',
      description: 'Aumente sua visibilidade nos mecanismos de busca.'
    },
    {
      icon: FaRocket,
      title: 'Estratégia Digital',
      description: 'Transforme sua presença online com estratégias inteligentes.'
    }
  ]

  return (
    <HomeWrapper
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <HeroSection>
        <HeroContent>
          <MainTitle
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.2
            }}
          >
            SiteForge
          </MainTitle>
          <Subtitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.4
            }}
          >
            Forjando sua presença digital com soluções web personalizadas e de alta performance
          </Subtitle>
          <ButtonGroup>
            <PrimaryButton 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Nossos Serviços
            </PrimaryButton>
          </ButtonGroup>
          <BenefitsList
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              type: "spring", 
              stiffness: 100,
              delay: 0.8
            }}
          >
            {['Sites 100% personalizados', 'Otimização para dispositivos móveis', 'Suporte técnico especializado'].map((benefit, index) => (
              <BenefitItem
                key={index}
                whileHover={{ scale: 1.05 }}
              >
                <FaCheckCircle color="#000" />
                {benefit}
              </BenefitItem>
            ))}
          </BenefitsList>
        </HeroContent>
        <HeroImage
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            type: "spring", 
            stiffness: 100,
            delay: 0.8
          }}
        >
          <LogoContainer
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              type: "spring", 
              stiffness: 100,
              delay: 0.8
            }}
          >
            <motion.img 
              src="/logo.svg" 
              alt="SiteForge - Desenvolvimento de Site Profissional" 
              style={{ 
                maxWidth: '300px', 
                height: '300px', 
                borderRadius: '100px',
                objectFit: 'cover'
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            />
          </LogoContainer>
        </HeroImage>
      </HeroSection>
      
      <ServicesSection>
        {services.map((service, index) => (
          <ServiceCard 
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              duration: 0.5, 
              delay: index * 0.2 
            }}
            whileHover={{ scale: 1.05 }}
          >
            <ServiceIcon>
              <service.icon />
            </ServiceIcon>
            <ServiceTitle>{service.title}</ServiceTitle>
            <ServiceDescription>{service.description}</ServiceDescription>
          </ServiceCard>
        ))}
      </ServicesSection>
    </HomeWrapper>
  )
}

export default Home
