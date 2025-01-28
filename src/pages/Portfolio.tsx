import React, { useState } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

// Importar imagens de exemplo (substitua pelos casos reais)
import Portfolio1 from '../assets/images/portfolio1.jpg'
import Portfolio2 from '../assets/images/portfolio2.jpg'
import Portfolio3 from '../assets/images/portfolio3.jpg'
import Portfolio4 from '../assets/images/portfolio4.jpg'
import Portfolio5 from '../assets/images/portfolio5.jpg'
import Portfolio6 from '../assets/images/portfolio6.jpg'
import Portfolio7 from '../assets/images/creative-image.jpg'
import WhatsappImage from '../assets/images/strategy-image.jpg'

interface PortfolioItem {
  id: number
  title: string
  description: string
  category: string
  image: string
  link?: string
}

const portfolioData: PortfolioItem[] = [
  {
    id: 1,
    title: 'Campanha E-commerce',
    description: 'Estratégia digital que aumentou vendas em 150%',
    category: 'E-commerce',
    image: Portfolio1
  },
  {
    id: 2,
    title: 'Branding Startup Tech',
    description: 'Criação de identidade visual e posicionamento digital',
    category: 'Branding',
    image: Portfolio2
  },
  {
    id: 3,
    title: 'Gestão de Redes Sociais',
    description: 'Crescimento de 200% no engajamento em 3 meses',
    category: 'Social Media',
    image: Portfolio3
  },
  {
    id: 4,
    title: 'SEO para Serviços',
    description: 'Primeira página do Google para palavras-chave estratégicas',
    category: 'SEO',
    image: Portfolio4
  },
  {
    id: 5,
    title: 'Campanha Local',
    description: 'Aumento de 80% nas vendas para negócio local',
    category: 'Marketing Local',
    image: Portfolio5
  },
  {
    id: 6,
    title: 'Ads Performance',
    description: 'Redução de 40% no custo por aquisição',
    category: 'Performance',
    image: Portfolio6
  },
  {
    id: 7,
    title: 'Marketing Criativo',
    description: 'Campanha inovadora que revolucionou a comunicação digital',
    category: 'Branding',
    image: Portfolio7
  },
  {
    id: 8,
    title: 'AVX Relacionamentos',
    description: 'Conecte-se conosco pelo WhatsApp',
    category: 'Contato',
    image: WhatsappImage,
    link: 'https://wa.me/5527997183566?text=Ol%C3%A1%2C+quero+fazer+um+or%C3%A7amento+%21'
  }
]

const iconMap = {
  'E-commerce': 'FaChartLine',
  'Branding': 'FaRocket',
  'Social Media': 'FaLightbulb',
  'SEO': 'FaCode',
  'Marketing Local': 'FaChartPie',
  'Performance': 'FaSearch',
  'Contato': 'FaWhatsapp'
}

const PortfolioContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 2rem;
  background: linear-gradient(
    135deg, 
    rgba(0,0,0,0.95) 0%, 
    rgba(20,20,30,0.95) 100%
  );
  min-height: 100vh;
  overflow: hidden;
`

const PortfolioHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
  color: #FFD700;
`

const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
  flex-wrap: wrap;
`

const FilterButton = styled(motion.button)<{ $active: boolean }>`
  margin: 0 0.5rem;
  padding: 0.5rem 1rem;
  background-color: ${props => props.$active ? '#FFD700' : 'transparent'};
  color: ${props => props.$active ? '#000' : '#FFD700'};
  border: 2px solid #FFD700;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: rgba(255, 215, 0, 0.2);
  }
`

const PortfolioGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  width: 100%;
  max-width: 1200px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const CardWrapper = styled.div`
  perspective: 2000px;
  transform-style: preserve-3d;
  width: 100%;
`

const PortfolioItemCard = styled(motion.div)`
  position: relative;
  overflow: hidden;
  border-radius: 15px;
  cursor: pointer;
  background: linear-gradient(135deg, rgba(20,20,20,0.9), rgba(30,30,30,0.9));
  box-shadow: 0 10px 25px rgba(0,0,0,0.2);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  perspective: 1000px;
  transform-style: preserve-3d;

  &:hover {
    transform: scale(1.03) translateZ(20px);
    box-shadow: 0 15px 35px rgba(0,0,0,0.3);
  }
`

const PortfolioImage = styled(motion.img)`
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 15px 15px 0 0;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  transform: translateZ(30px);
  filter: grayscale(20%);

  &:hover {
    filter: grayscale(0%) brightness(1.1);
    transform: scale(1.05);
  }
`

const ModalOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`

const ModalContent = styled(motion.div)`
  background: white;
  padding: 20px;
  border-radius: 10px;
  max-width: 90%;
  max-height: 90%;
  overflow: auto;
`

const CloseButton = styled(motion.button)`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
`

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

const Portfolio: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const categories = ['Todos', ...new Set(portfolioData.map(item => item.category))]

  const filteredPortfolio = selectedCategory
    ? portfolioData.filter(item => item.category === selectedCategory)
    : portfolioData

  const handleCategoryClick = (category: string | null) => {
    setSelectedCategory(category)
  }

  const openModal = (item: PortfolioItem) => {
    setSelectedItem(item)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setSelectedItem(null)
    setIsModalOpen(false)
  }

  return (
    <PortfolioContainer>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: 'spring' }}
      >
        <PortfolioHeader>
          <h1>Nosso Portfólio</h1>
          <p>Transformando Desafios em Sucessos Digitais</p>
        </PortfolioHeader>
      </motion.div>

      <FilterContainer>
        {categories.map(category => (
          <FilterButton
            key={category}
            $active={selectedCategory === category}
            onClick={() => handleCategoryClick(category)}
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 0 15px rgba(255,215,0,0.5)'
            }}
            whileTap={{ scale: 0.95 }}
          >
            {category}
          </FilterButton>
        ))}
      </FilterContainer>

      <PortfolioGrid>
        {filteredPortfolio.map(item => {
          const IconComponent = iconMap[item.category as keyof typeof iconMap] || 'FaSearch'

          return (
            <CardWrapper key={item.id}>
              <PortfolioItemCard
                initial={{ 
                  opacity: 0, 
                  y: 50,
                  scale: 0.95
                }}
                animate={{ 
                  opacity: 1, 
                  y: 0,
                  scale: 1
                }}
                whileHover={{
                  scale: 1.03,
                  transition: {
                    type: 'tween',
                    duration: 0.3
                  }
                }}
                transition={{ 
                  duration: 0.7, 
                  delay: item.id * 0.1,
                  type: 'spring',
                  stiffness: 250,
                  damping: 25
                }}
                onClick={() => openModal(item)}
              >
                <PortfolioImage 
                  src={item.image} 
                  alt={item.title} 
                />
                <IconWrapper>
                  <i className={IconComponent} />
                </IconWrapper>
              </PortfolioItemCard>
            </CardWrapper>
          )
        })}
      </PortfolioGrid>

      {isModalOpen && selectedItem && (
        <ModalOverlay 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeModal}
        >
          <ModalContent
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={(e: React.MouseEvent) => e.stopPropagation()}
          >
            <CloseButton 
              onClick={closeModal}
              whileHover={{ rotate: 90 }}
            >
              <i className="fas fa-times" />
            </CloseButton>
            <img 
              src={selectedItem.image} 
              alt={selectedItem.title} 
              style={{ maxWidth: '100%', maxHeight: '70vh', objectFit: 'contain' }} 
            />
            <h2>{selectedItem.title}</h2>
            <p>{selectedItem.description}</p>
          </ModalContent>
        </ModalOverlay>
      )}
    </PortfolioContainer>
  )
}

export default Portfolio
