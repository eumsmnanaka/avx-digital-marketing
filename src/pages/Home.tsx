import React from 'react'
import styled from 'styled-components'
import { motion, MotionProps } from 'framer-motion'
import { FaGoogle, FaWhatsapp, FaStar } from 'react-icons/fa'
import { isMobile, isTablet } from 'react-device-detect'

// Image imports
import HeroImage from '../assets/images/hero-image.jpg'

console.log('Hero Image Import:', HeroImage)

// Definição dos tipos de comentários
interface Testimonial {
  id: number;
  name: string;
  comment: string;
  rating: number;
  avatar?: string;
}

// Dados de exemplo para comentários
const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "João Silva",
    comment: "Serviço excepcional! A AVX superou todas as minhas expectativas em qualidade e atendimento.",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/men/1.jpg"
  },
  {
    id: 2,
    name: "Maria Souza",
    comment: "Profissionalismo e dedicação são marcas da AVX. Recomendo fortemente!",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/women/2.jpg"
  },
  {
    id: 3,
    name: "Carlos Eduardo",
    comment: "Trabalho impecável, entrega no prazo e com alta qualidade. Muito satisfeito!",
    rating: 4,
    avatar: "https://randomuser.me/api/portraits/men/3.jpg"
  }
]

interface AnimatedProps extends MotionProps {
  $isMobile?: boolean;
}

const TestimonialsSection = styled(motion.section)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 50px 20px;
  background: transparent;
`

const SectionTitle = styled.h2`
  text-align: center;
  color: #FFD700;
  margin-bottom: 40px;
  font-size: 2.5rem;
  width: 100%;
`

const TestimonialCard = styled(motion.div)`
  background: rgba(30, 30, 50, 0.2);
  backdrop-filter: blur(10px);
  border-radius: 10px;
  padding: 20px;
  margin: 10px;
  width: 350px;
  display: flex;
  align-items: center;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    background: rgba(30, 30, 50, 0.3);
  }
`

const TestimonialAvatar = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  margin-right: 15px;
  border: 2px solid #FFD700;
`

const TestimonialContent = styled.div`
  display: flex;
  flex-direction: column;
`

const TestimonialName = styled.h4`
  margin: 0 0 5px 0;
  color: #FFD700;
  font-size: 1.1rem;
`

const TestimonialRating = styled.div`
  display: flex;
  margin-bottom: 10px;
`

const TestimonialText = styled.p`
  margin: 0;
  color: #d0d0d0;
  font-size: 0.9rem;
  line-height: 1.5;
`

const HomeContainer = styled(motion.div)<{ $isMobile: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(135deg, #121212, #1E1E1E);
  color: #FFFFFF;
  overflow-x: hidden;
  padding-bottom: ${props => props.$isMobile ? '80px' : '0'};
  margin-bottom: ${props => props.$isMobile ? '20px' : '0'};
`

const HeroSection = styled(motion.section)<AnimatedProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${props => props.$isMobile ? '1rem' : '2rem 4rem'};
  gap: 2rem;
  perspective: 1000px;
  transform-style: preserve-3d;
`

const HeroContent = styled(motion.div)<AnimatedProps>`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  text-align: ${props => props.$isMobile ? 'center' : 'left'};
  transform: translateZ(50px);
`

const HeroTitle = styled(motion.h1)<AnimatedProps>`
  font-size: ${props => props.$isMobile ? '1.8rem' : '2.5rem'};
  font-weight: 700;
  color: #FFD700;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(to right, transparent, #FFD700, transparent);
    transform: scaleX(0);
    transition: transform 0.5s ease;
  }

  &:hover::before {
    transform: scaleX(1);
  }
`

const HeroSubtitle = styled(motion.p)<AnimatedProps>`
  font-size: ${props => props.$isMobile ? '1rem' : '1.2rem'};
  color: #FFD700;
  opacity: 0.8;
  transition: all 0.3s ease;

  &:hover {
    opacity: 1;
    transform: translateX(10px);
  }
`

const HeroImageContainer = styled(motion.div)<AnimatedProps>`
  flex: 1;
  display: ${props => props.$isMobile ? 'none' : 'block'};
  text-align: center;
`

const FeaturesSection = styled.div<{ $isMobile: boolean }>`
  display: flex;
  flex-direction: ${props => props.$isMobile ? 'column' : 'row'};
  justify-content: center;
  align-items: center;
  gap: ${props => props.$isMobile ? '1rem' : '2rem'};
  padding: ${props => props.$isMobile ? '1rem' : '2rem'};
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
  }
`

const FeatureCard = styled(motion.a)<AnimatedProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: ${props => props.$isMobile ? '1rem' : '1.5rem'};
  background: linear-gradient(135deg, rgba(20,20,20,0.9), rgba(30,30,30,0.9));
  border-radius: 15px;
  text-decoration: none;
  color: #FFD700;
  width: 100%;
  max-width: ${props => props.$isMobile ? '90%' : '300px'};
  position: relative;
  overflow: hidden;
  perspective: 1000px;
  transform-style: preserve-3d;
  transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  box-shadow: 0 10px 25px rgba(0,0,0,0.2);
  cursor: pointer;
  backdrop-filter: blur(5px);

  @media (max-width: 768px) {
    max-width: 90%;
    padding: 1rem;
    margin: 0.5rem 0;
  }

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(
      circle at center, 
      rgba(255, 215, 0, 0.1) 0%, 
      transparent 70%
    );
    opacity: 0;
    z-index: 1;
    transition: opacity 0.5s ease;
  }

  &:hover {
    transform: scale(1.05) rotateX(10deg) rotateY(-10deg);
    box-shadow: 0 15px 40px rgba(255, 215, 0, 0.2);

    &::before {
      opacity: 0.3;
    }

    h3 {
      transform: translateY(-10px) rotate(2deg);
      letter-spacing: 1px;
      color: #FFEC00;
    }

    p {
      opacity: 0.9;
      transform: translateY(0) rotate(-1deg);
    }
  }
`

const FeatureIcon = styled(motion.div)<{ $isMobile: boolean }>`
  font-size: ${props => props.$isMobile ? '2rem' : '2.5rem'};
  color: #FFD700;
  margin-bottom: 1rem;
  transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  transform: translateZ(50px);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: ${props => props.$isMobile ? '60px' : '80px'};
  height: ${props => props.$isMobile ? '60px' : '80px'};
  cursor: pointer;
  background: rgba(255, 215, 0, 0.05);

  @media (max-width: 768px) {
    font-size: 2rem;
    width: 60px;
    height: 60px;
  }
`

const Home: React.FC = () => {
  const deviceIsMobile = isMobile || isTablet

  return (
    <HomeContainer $isMobile={deviceIsMobile}>
      <HeroSection
        $isMobile={deviceIsMobile}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.8,
          type: 'spring',
          stiffness: 250,
          damping: 25
        }}
      >
        <HeroContent $isMobile={deviceIsMobile}>
          <HeroTitle 
            $isMobile={deviceIsMobile}
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ 
              delay: 0.2,
              type: 'spring',
              stiffness: 300
            }}
            whileHover={{
              scale: 1.05,
              transition: { type: 'spring', stiffness: 300 }
            }}
          >
            Transforme sua Presença Digital com AVX Marketing
          </HeroTitle>
          <HeroSubtitle 
            $isMobile={deviceIsMobile}
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ 
              delay: 0.4,
              type: 'spring',
              stiffness: 300
            }}
          >
            AGENCIA ESPECIALIZADA EM IMPULSIONAR MARCAS E NEGOCIOS NA INTERNET 
          </HeroSubtitle>
        </HeroContent>

        <HeroImageContainer 
          $isMobile={deviceIsMobile}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ 
            delay: 0.6,
            type: 'spring',
            stiffness: 250
          }}
        >
          <img src={HeroImage} alt="Hero Image" />
        </HeroImageContainer>
      </HeroSection>

      <FeaturesSection $isMobile={deviceIsMobile}>
        <FeatureCard
          $isMobile={deviceIsMobile}
          href="https://search.google.com/local/writereview?placeid=ChIJuRfjS4sXuAARAAjUl1bkNhA&source=g.page.m.dd._&laa=lu-desktop-reviews-dialog-review-solicitation"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ 
            opacity: 0, 
            y: 50,
            scale: 0.8,
            rotateX: 15,
            rotateY: -15
          }}
          animate={{ 
            opacity: 1, 
            y: 0,
            scale: 1,
            rotateX: 0,
            rotateY: 0
          }}
          whileHover={{
            scale: 1.05,
            transition: {
              type: 'spring',
              stiffness: 300,
              damping: 10
            }
          }}
          transition={{ 
            duration: 0.7,
            type: 'spring',
            stiffness: 250,
            damping: 25
          }}
        >
          <FeatureIcon
            $isMobile={deviceIsMobile}
            initial={{ 
              rotate: 0,
              scale: 1,
              color: '#FFD700'
            }}
            whileHover={{ 
              rotate: [0, 10, -10, 10, -10, 0],
              scale: 1.1,
              color: '#4285F4',
              transition: { 
                duration: 0.5,
                type: 'tween'
              }
            }}
          >
            <FaGoogle />
          </FeatureIcon>
          <h3>Nos Avalie no Google</h3>
          <p>Compartilhe sua experiência e ajude outros clientes a nos conhecerem</p>
        </FeatureCard>

        <FeatureCard
          $isMobile={deviceIsMobile}
          href="https://wa.me/5527997183566?text=Ol%C3%A1%2C+quero+fazer+um+or%C3%A7amento+%21"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ 
            opacity: 0, 
            y: 50,
            scale: 0.8,
            rotateX: 15,
            rotateY: -15
          }}
          animate={{ 
            opacity: 1, 
            y: 0,
            scale: 1,
            rotateX: 0,
            rotateY: 0
          }}
          whileHover={{
            scale: 1.05,
            transition: {
              type: 'spring',
              stiffness: 300,
              damping: 10
            }
          }}
          transition={{ 
            duration: 0.7,
            delay: 0.2,
            type: 'spring',
            stiffness: 250,
            damping: 25
          }}
        >
          <FeatureIcon
            $isMobile={deviceIsMobile}
            initial={{ 
              rotate: 0,
              scale: 1,
              color: '#FFD700'
            }}
            whileHover={{ 
              rotate: [0, 10, -10, 10, -10, 0],
              scale: 1.1,
              color: '#25D366',
              transition: { 
                duration: 0.5,
                type: 'tween'
              }
            }}
          >
            <FaWhatsapp />
          </FeatureIcon>
          <h3>Orçamentos - AVX COMERCIAL</h3>
          <p>Clique aqui para solicitar um orçamento pelo WhatsApp</p>
        </FeatureCard>

        <FeatureCard
          $isMobile={deviceIsMobile}
          href="https://wa.me/message/Q3XD3KOI3UGZF1"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ 
            opacity: 0, 
            y: 50,
            scale: 0.8,
            rotateX: 15,
            rotateY: -15
          }}
          animate={{ 
            opacity: 1, 
            y: 0,
            scale: 1,
            rotateX: 0,
            rotateY: 0
          }}
          whileHover={{
            scale: 1.05,
            transition: {
              type: 'spring',
              stiffness: 300,
              damping: 10
            }
          }}
          transition={{ 
            duration: 0.7,
            delay: 0.4,
            type: 'spring',
            stiffness: 250,
            damping: 25
          }}
          style={{ 
            backdropFilter: 'none',
            background: 'linear-gradient(135deg, rgba(20,20,20,0.9), rgba(30,30,30,0.9))'
          }}
        >
          <FeatureIcon
            $isMobile={deviceIsMobile}
            initial={{ 
              rotate: 0,
              scale: 1,
              color: '#FFD700'
            }}
            whileHover={{ 
              rotate: [0, 10, -10, 10, -10, 0],
              scale: 1.1,
              color: '#25D366',
              transition: { 
                duration: 0.5,
                type: 'tween'
              }
            }}
          >
            <FaWhatsapp />
          </FeatureIcon>
          <h3>AVX Relacionamentos</h3>
          <p>Conecte-se conosco e faça seu orçamento</p>
        </FeatureCard>
      </FeaturesSection>

      <TestimonialsSection
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <SectionTitle>Depoimentos de Clientes</SectionTitle>
        {testimonials.map((testimonial) => (
          <TestimonialCard
            key={testimonial.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.6, 
              delay: testimonial.id * 0.2 
            }}
            whileHover={{ 
              scale: 1.05,
              transition: { duration: 0.3 }
            }}
          >
            {testimonial.avatar && (
              <TestimonialAvatar 
                src={testimonial.avatar} 
                alt={testimonial.name} 
              />
            )}
            <TestimonialContent>
              <TestimonialName>{testimonial.name}</TestimonialName>
              <TestimonialRating>
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} color="#FFD700" />
                ))}
              </TestimonialRating>
              <TestimonialText>{testimonial.comment}</TestimonialText>
            </TestimonialContent>
          </TestimonialCard>
        ))}
      </TestimonialsSection>
    </HomeContainer>
  )
}

export default Home
