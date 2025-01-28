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
import { useNavigate } from 'react-router-dom'

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
  padding: 4rem 0 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    padding: 3rem 1rem 2rem;
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

const HeroImage = styled(motion.div)`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 500px;
  margin: 0 auto;

  @media (max-width: 768px) {
    max-width: 300px;
    margin-top: 2rem;
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

const MainSubtitle = styled(motion.p)`
  font-family: 'Inter', sans-serif;
  font-size: 1.1rem;
  font-weight: 400;
  color: rgba(106, 17, 203, 0.8);
  line-height: 1.6;
  max-width: 600px;
  text-align: center;
  letter-spacing: 0.5px;
  margin-top: 1rem;

  @media (max-width: 768px) {
    font-size: 0.95rem;
    max-width: 90%;
    padding: 0 15px;
  }
`

const Subtitle = styled(motion.p)`
  font-size: 1.5rem;
  color: ${props => props.theme.colors.text};
  max-width: 700px;
  margin: 0 auto;
  text-align: center;
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

const SecondaryButton = styled(motion.a)`
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

const PromotionalBanner = styled(motion.button)`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: rgba(106, 17, 203, 0.15);
  color: #6a11cb;
  padding: 8px 12px;
  border-radius: 8px;
  font-size: 0.8rem;
  font-weight: 650;
  z-index: 1000;
  backdrop-filter: blur(8px);
  border: 1px solid rgba(106, 17, 203, 0.25);
  box-shadow: 0 3px 5px rgba(106, 17, 203, 0.08);
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  outline: none;

  &:hover {
    background-color: rgba(106, 17, 203, 0.25);
    transform: scale(1.03);
  }

  &:active {
    transform: scale(0.97);
  }

  @media (max-width: 768px) {
    bottom: 15px;
    right: 15px;
    font-size: 0.7rem;
    padding: 6px 10px;
  }
`

const PromotionalIcon = styled(motion.div)`
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  color: #6a11cb;
`

const Home: React.FC = () => {
  const navigate = useNavigate()

  const handleServicesClick = () => {
    navigate('/servicos')
  }

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
      transition={{ duration: 0.5 }}
    >
      <PromotionalBanner
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
        onClick={handleServicesClick}
      >
        <PromotionalIcon
          initial={{ rotate: 0 }}
          animate={{ rotate: [0, 15, -15, 0] }}
          transition={{ 
            duration: 1, 
            repeat: Infinity,
            repeatDelay: 2
          }}
        >
          <FaRocket />
        </PromotionalIcon>
        3 Semanas Grátis!
      </PromotionalBanner>

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
              type: "spring", 
              stiffness: 100,
              delay: 0.4
            }}
          >
            Forjando sua presença digital com soluções web personalizadas e de alta performance
          </Subtitle>
          <ButtonGroup>
            <PrimaryButton onClick={handleServicesClick}>
              NOSSOS SERVIÇOS
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
