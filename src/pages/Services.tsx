import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { 
  FaChartLine, 
  FaRocket, 
  FaUsers, 
  FaSearch, 
  FaShareSquare, 
  FaChartPie 
} from 'react-icons/fa'

const ServicesContainer = styled.div`
  background-color: #000000;
  color: #FFD700;
  min-height: 100vh;
  padding: 100px 50px;
`

const SectionTitle = styled.h1`
  text-align: center;
  font-size: 3rem;
  margin-bottom: 50px;
`

const ServiceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const ServiceCard = styled(motion.div)`
  background-color: #1A1A1A;
  padding: 30px;
  border-radius: 10px;
  text-align: center;
  transition: transform 0.3s ease;
`

const ServiceIcon = styled.div`
  font-size: 3rem;
  color: #FFD700;
  margin-bottom: 20px;
`

const ServiceTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 15px;
`

const ServiceDescription = styled.p`
  color: #CCCCCC;
`

const Services: React.FC = () => {
  const services = [
    {
      icon: <FaChartLine />,
      title: 'Marketing Estratégico',
      description: 'Análise de mercado e planejamento estratégico para impulsionar seus resultados.'
    },
    {
      icon: <FaRocket />,
      title: 'Gestão de Redes Sociais',
      description: 'Criação de conteúdo, gestão de comunidades e estratégias de engajamento.'
    },
    {
      icon: <FaUsers />,
      title: 'Consultoria Digital',
      description: 'Soluções personalizadas para transformar sua presença online.'
    },
    {
      icon: <FaSearch />,
      title: 'SEO',
      description: 'Otimização para motores de busca e melhoria de visibilidade online.'
    },
    {
      icon: <FaShareSquare />,
      title: 'Marketing de Conteúdo',
      description: 'Criação de conteúdo relevante e estratégico para sua marca.'
    },
    {
      icon: <FaChartPie />,
      title: 'Analytics',
      description: 'Análise de dados e métricas para tomada de decisão inteligente.'
    }
  ]

  return (
    <ServicesContainer>
      <SectionTitle>Nossos Serviços</SectionTitle>
      <ServiceGrid>
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              delay: index * 0.2, 
              type: 'spring', 
              stiffness: 100 
            }}
            whileHover={{ scale: 1.05 }}
          >
            <ServiceIcon>{service.icon}</ServiceIcon>
            <ServiceTitle>{service.title}</ServiceTitle>
            <ServiceDescription>{service.description}</ServiceDescription>
          </ServiceCard>
        ))}
      </ServiceGrid>
    </ServicesContainer>
  )
}

export default Services
