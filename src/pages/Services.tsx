import React from 'react'
import styled from 'styled-components'
import bgTexture from '../assets/bg-texture.png'
import { FaCode, FaMobileAlt, FaRocket } from 'react-icons/fa'

const ServicesWrapper = styled.section`
  max-width: 1400px;
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

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  width: 100%;
  justify-content: center;
  align-items: stretch;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    padding: 0 1rem;
  }
`

const ServiceCard = styled.div`
  background-color: ${props => props.theme.colors.background};
  border-radius: 15px;
  border: 2px solid #6a11cb;
  padding: 2rem;
  text-align: center;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  @media (max-width: 768px) {
    padding: 1.5rem;
    width: 100%;
    margin: 0 auto;
  }
`

const ServiceIcon = styled.div`
  font-size: 3rem;
  color: #6a11cb;
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.9;

  @media (max-width: 768px) {
    font-size: 3rem;
  }
`

const ServiceTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: 700;
  color: #6a11cb;
  margin-bottom: 1rem;
  text-align: center;
  letter-spacing: -0.03em;
  line-height: 1.3;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`

const ServiceDescription = styled.p`
  font-size: 1.1rem;
  color: rgba(0,0,0,0.7);
  margin-bottom: 1.5rem;
  text-align: center;
  line-height: 1.6;
  font-weight: 400;
  letter-spacing: -0.02em;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`

const ServicePrice = styled.div`
  font-size: 2.8rem;
  font-weight: 800;
  color: #6a11cb;
  margin-bottom: 1rem;
  text-align: center;
  letter-spacing: -0.05em;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`

const ServiceButton = styled.button`
  background: linear-gradient(135deg, #6a11cb 0%, #4a148c 100%);
  color: white;
  padding: 12px 24px;
  border-radius: 10px;
  font-size: 1.1rem;
  font-weight: 600;
  letter-spacing: -0.02em;
  text-transform: uppercase;
  border: none;
  cursor: pointer;
`

const Services: React.FC = () => {
  const services = [
    {
      icon: FaCode,
      title: 'Básico',
      description: 'Landing Page, Design Responsivo, Otimização SEO Básica, Suporte por Email',
      price: 'R$ 35'
    },
    {
      icon: FaMobileAlt,
      title: 'Intermediário',
      description: 'Site Completo, Design Personalizado, Otimização SEO Avançada, Integração de Redes Sociais, Suporte Prioritário',
      price: 'R$ 65'
    },
    {
      icon: FaRocket,
      title: 'Avançado',
      description: 'Site Empresarial Completo, Design Premium, SEO Especializado, E-commerce, Marketing Digital, Suporte Dedicado 24/7',
      price: 'R$ 120'
    }
  ]

  const handleContractClick = (title: string) => {
    const whatsappMessage = `Olá, tenho interesse no plano ${title}. Gostaria de mais informações.`
    const whatsappUrl = `https://wa.me/5527999159857?text=${encodeURIComponent(whatsappMessage)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <ServicesWrapper>
      <h1>Nossos Serviços</h1>
      <ServicesGrid>
        {services.map((service, index) => (
          <ServiceCard key={index}>
            <ServiceIcon>
              <service.icon />
            </ServiceIcon>
            <ServiceTitle>{service.title}</ServiceTitle>
            <ServiceDescription>{service.description}</ServiceDescription>
            <ServicePrice>{service.price}</ServicePrice>
            <ServiceButton onClick={() => handleContractClick(service.title)}>
              Contratar
            </ServiceButton>
          </ServiceCard>
        ))}
      </ServicesGrid>
    </ServicesWrapper>
  )
}

export default Services
