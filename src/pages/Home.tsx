import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { FaRocket, FaLightbulb, FaGoogle, FaWhatsapp } from 'react-icons/fa'
import { isMobile, isTablet } from 'react-device-detect'

// Image imports
import HeroImage from '../assets/images/hero-image.jpg'

const HomeContainer = styled.div<{ $isMobile: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: ${props => props.$isMobile ? '1rem' : '2rem'};
  background-color: transparent;
  color: #FFD700;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 1rem;
  }

  &::before {
    content: 'AVX';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(-15deg);
    font-size: ${props => props.$isMobile ? '40vw' : '30vw'};
    font-weight: 900;
    color: rgba(255, 215, 0, 0.05);
    z-index: -1;
    user-select: none;
    pointer-events: none;
    transition: none;

    @media (max-width: 768px) {
      font-size: 40vw;
    }
  }
`

const HeroSection = styled(motion.section)<{ $isMobile: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: ${props => props.$isMobile ? '100%' : '1200px'};
  width: 100%;
  text-align: center;
  position: relative;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`

const HeroContent = styled.div<{ $isMobile: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: ${props => props.$isMobile ? '100%' : '800px'};

  @media (max-width: 768px) {
    max-width: 100%;
    padding: 0 20px;
  }

  h1 {
    font-size: 3rem;
    margin-bottom: 20px;
    color: #FFD700;
    word-break: break-word;
    max-width: 100%;
    padding: 0 1rem;
    position: relative;
    z-index: 1;
  }

  h2 {
    font-size: 1.3rem;
    color: #FFEC00;
    margin-bottom: 30px;
    font-weight: 400;
    max-width: 90%;
    word-break: break-word;
    padding: 0 1rem;
    position: relative;
    z-index: 1;
  }
`

const HeroImageContainer = styled.div<{ $isMobile: boolean }>`
  max-width: ${props => props.$isMobile ? '90%' : '600px'};
  width: 100%;
  margin-top: ${props => props.$isMobile ? '0.2rem' : '2rem'};
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0,0,0,0.2);
  transition: transform 0.3s ease;

  &:hover {
    transform: ${props => props.$isMobile ? 'none' : 'scale(1.02)'};
  }

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    max-width: 90%;
    margin-top: 0.2rem;
  }
`

const MarketingGraphic = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.6);
  
  svg {
    width: 60%;
    height: 60%;
    color: #FFD700;
    opacity: 0.8;
  }
`

const FeaturesSection = styled.section`
  display: flex;
  justify-content: center;
  gap: 2rem;
  width: 100%;
  max-width: 1200px;
  background-color: rgba(10,10,10,0.8);
  padding: 50px 20px;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(255,215,0,0.2);
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
    padding: 30px 15px;
  }
`

const FeatureCard = styled(motion.a)`
  text-align: center;
  max-width: 320px;
  width: 100%;
  color: #FFFFFF;
  background-color: rgba(20,20,20,0.7);
  padding: 35px;
  border-radius: 20px;
  transition: all 0.3s ease;
  display: block;
  text-decoration: none;
  border: 2px solid transparent;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, transparent, rgba(255,215,0,0.1), transparent);
    transform: skew(-15deg) translateX(-100%);
    transition: all 0.6s ease;
  }

  &:hover {
    transform: scale(1.05);
    border-color: rgba(255,215,0,0.5);
    box-shadow: 0 15px 35px rgba(255,215,0,0.3);
  }

  &:hover::before {
    transform: skew(-15deg) translateX(100%);
  }

  h3 {
    margin-bottom: 15px;
    color: #FFFFFF;
    font-size: 1.3rem;
    letter-spacing: 0.5px;
  }

  p {
    color: #F0F0F0;
    font-size: 0.9rem;
    opacity: 0.8;
  }

  @media (max-width: 768px) {
    max-width: 90%;
    padding: 25px;
  }
`

const FeatureIcon = styled.div`
  font-size: 3.5rem;
  margin-bottom: 20px;
  color: #FFD700;
  transition: transform 0.3s ease;

  ${FeatureCard}:hover & {
    transform: rotate(360deg);
  }
`

const HeroTitle = styled(motion.h1)<{ $isMobile: boolean }>`
  font-family: 'Space Grotesk', sans-serif;
  font-size: ${props => props.$isMobile ? '2.5rem' : '3.5rem'};
  font-weight: 700;
  color: #FFD700;
  line-height: 1.2;
  margin-bottom: 1rem;
  letter-spacing: ${props => props.$isMobile ? '-0.5px' : '-1px'};
  text-shadow: 2px 2px 4px rgba(0,0,0,0.3);

  @media (max-width: 768px) {
    font-size: 2.5rem;
    letter-spacing: -0.5px;
  }
`

const HeroSubtitle = styled(motion.p)<{ $isMobile: boolean }>`
  font-family: 'Space Grotesk', sans-serif;
  font-size: ${props => props.$isMobile ? '1rem' : '1.2rem'};
  font-weight: 400;
  color: rgba(255,215,0,0.8);
  max-width: ${props => props.$isMobile ? '100%' : '700px'};
  margin-bottom: 2rem;
  line-height: 1.6;
  padding: ${props => props.$isMobile ? '0 10px' : '0'};

  @media (max-width: 768px) {
    font-size: 1rem;
    max-width: 100%;
    padding: 0 10px;
  }
`

const Home: React.FC = () => {
  const deviceIsMobile = isMobile || isTablet

  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    in: { opacity: 1, y: 0 },
    out: { opacity: 0, y: -20 }
  }

  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.5
  }

  return (
    <HomeContainer $isMobile={deviceIsMobile}>
      <HeroSection 
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
        $isMobile={deviceIsMobile}
      >
        <HeroContent $isMobile={deviceIsMobile}>
          <HeroTitle 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            $isMobile={deviceIsMobile}
          >
            AVX MARKETING
          </HeroTitle>
          <HeroSubtitle 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            $isMobile={deviceIsMobile}
          >
            AGENCIA ESPECIALIZADA EM IMPULSIONAR MARCAS E NEGOCIOS NA INTERNET 
          </HeroSubtitle>
        </HeroContent>

        <HeroImageContainer 
          $isMobile={deviceIsMobile}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <img src={HeroImage} alt="Hero Image" />
        </HeroImageContainer>
      </HeroSection>

      <FeaturesSection>
        <FeatureCard
          href="https://search.google.com/local/writereview?placeid=ChIJuRfjS4sXuAARAAjUl1bkNhA&source=g.page.m.dd._&laa=lu-desktop-reviews-dialog-review-solicitation"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <FeatureIcon><FaGoogle /></FeatureIcon>
          <h3>Nos Avalie no Google</h3>
          <p>Compartilhe sua experiência e ajude outros clientes a nos conhecerem</p>
        </FeatureCard>

        <FeatureCard
          href="https://wa.me/5527997183566?text=Ol%C3%A1%2C+quero+fazer+um+or%C3%A7amento+%21"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <FeatureIcon><FaWhatsapp /></FeatureIcon>
          <h3>Orçamentos - AVX COMERCIAL</h3>
          <p>Clique aqui para solicitar um orçamento pelo WhatsApp</p>
        </FeatureCard>

        <FeatureCard
          href="https://wa.me/message/Q3XD3KOI3UGZF1"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <FeatureIcon><FaWhatsapp /></FeatureIcon>
          <h3>AVX Relacionamentos</h3>
          <p>Entre em contato conosco para mais informações</p>
        </FeatureCard>
      </FeaturesSection>
    </HomeContainer>
  )
}

export default Home
