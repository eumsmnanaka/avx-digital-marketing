import React, { useState } from 'react'
import styled from 'styled-components'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  FaEye, 
  FaMobile, 
  FaDesktop, 
  FaTabletAlt 
} from 'react-icons/fa'

// Simulação de imagens de sites (você pode substituir por imagens reais)
const siteMockups = [
  {
    id: 1,
    name: 'Restaurante Gourmet',
    type: 'Alimentação',
    description: 'Site elegante para restaurante de alta gastronomia',
    desktopImage: '/site-mockups/restaurant-desktop.jpg',
    mobileImage: '/site-mockups/restaurant-mobile.jpg',
    features: [
      'Menu interativo',
      'Reservas online',
      'Galeria de pratos'
    ]
  },
  {
    id: 2,
    name: 'Clínica Médica',
    type: 'Saúde',
    description: 'Plataforma moderna para clínica especializada',
    desktopImage: '/site-mockups/clinic-desktop.jpg',
    mobileImage: '/site-mockups/clinic-mobile.jpg',
    features: [
      'Agendamento online',
      'Informações de especialidades',
      'Área de telemedicina'
    ]
  },
  {
    id: 3,
    name: 'Escola de Idiomas',
    type: 'Educação',
    description: 'Plataforma interativa para aprendizado de línguas',
    desktopImage: '/site-mockups/language-desktop.jpg',
    mobileImage: '/site-mockups/language-mobile.jpg',
    features: [
      'Aulas ao vivo',
      'Material didático online',
      'Teste de nível'
    ]
  }
]

const GalleryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background: rgba(0,0,0,0.02);
`

const SiteCard = styled(motion.div)`
  background: white;
  border-radius: 15px;
  box-shadow: 0 10px 25px rgba(0,0,0,0.1);
  width: 100%;
  max-width: 900px;
  margin-bottom: 2rem;
  overflow: hidden;
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const SiteInfo = styled.div`
  flex: 1;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const SiteTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #000;
  font-family: 'Inter', sans-serif;
  letter-spacing: -0.02em;
`

const SiteType = styled.span`
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 1rem;
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  letter-spacing: -0.01em;
`

const SiteDescription = styled.p`
  margin-bottom: 1rem;
  color: #333;
  font-size: 0.95rem;
  font-family: 'Inter', sans-serif;
  line-height: 1.6;
`

const FeatureList = styled.ul`
  list-style-type: none;
  padding: 0;
`

const FeatureItem = styled.li`
  color: #666;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  font-family: 'Inter', sans-serif;

  &::before {
    content: '✓';
    color: green;
    margin-right: 10px;
  }
`

const SiteImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f0f0f0;
  padding: 1rem;
`

const DeviceToggle = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 1rem;
`

const DeviceButton = styled(motion.button)<{ active?: boolean }>`
  background: ${props => props.active ? '#000' : 'transparent'};
  color: ${props => props.active ? 'white' : '#666'};
  border: 1px solid #000;
  padding: 10px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  transition: all 0.3s ease;
`

const SiteImage = styled(motion.img)`
  max-width: 100%;
  max-height: 400px;
  object-fit: contain;
  border-radius: 10px;
`

const SiteGallery: React.FC = () => {
  const [selectedSite, setSelectedSite] = useState(siteMockups[0])
  const [deviceView, setDeviceView] = useState<'desktop' | 'mobile'>('desktop')

  return (
    <GalleryContainer>
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        style={{ marginBottom: '2rem', textAlign: 'center', color: '#000' }}
      >
        Galeria de Sites Criados
      </motion.h1>

      <SiteCard
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <SiteInfo>
          <SiteTitle>{selectedSite.name}</SiteTitle>
          <SiteType>{selectedSite.type}</SiteType>
          <SiteDescription>{selectedSite.description}</SiteDescription>
          
          <FeatureList>
            {selectedSite.features.map((feature, index) => (
              <FeatureItem key={index}>{feature}</FeatureItem>
            ))}
          </FeatureList>

          <DeviceToggle>
            <DeviceButton
              active={deviceView === 'desktop'}
              onClick={() => setDeviceView('desktop')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaDesktop /> Desktop
            </DeviceButton>
            <DeviceButton
              active={deviceView === 'mobile'}
              onClick={() => setDeviceView('mobile')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaMobile /> Mobile
            </DeviceButton>
          </DeviceToggle>
        </SiteInfo>

        <SiteImageContainer>
          <AnimatePresence mode="wait">
            <SiteImage
              key={deviceView}
              src={deviceView === 'desktop' 
                ? selectedSite.desktopImage 
                : selectedSite.mobileImage
              }
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              alt={`${selectedSite.name} - ${deviceView} view`}
            />
          </AnimatePresence>
        </SiteImageContainer>
      </SiteCard>

      <motion.div 
        style={{ 
          display: 'flex', 
          gap: '1rem', 
          justifyContent: 'center' 
        }}
      >
        {siteMockups.map((site) => (
          <motion.button
            key={site.id}
            onClick={() => setSelectedSite(site)}
            style={{
              background: selectedSite.id === site.id ? '#000' : 'transparent',
              color: selectedSite.id === site.id ? 'white' : '#666',
              border: '1px solid #000',
              padding: '10px 20px',
              borderRadius: '5px',
              cursor: 'pointer'
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {site.name}
          </motion.button>
        ))}
      </motion.div>
    </GalleryContainer>
  )
}

export default SiteGallery
