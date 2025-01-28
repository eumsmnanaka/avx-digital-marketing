import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { isMobile, isTablet } from 'react-device-detect'

const LogoContainer = styled(motion.div)<{ $isMobile: boolean }>`
  position: ${props => props.$isMobile ? 'static' : 'fixed'};
  top: ${props => props.$isMobile ? 'auto' : '10px'};
  left: ${props => props.$isMobile ? 'auto' : '50%'};
  transform: ${props => props.$isMobile ? 'none' : 'translateX(-50%)'};
  z-index: 1100;
  display: ${props => props.$isMobile ? 'none' : 'flex'};
  align-items: center;
`

const LogoText = styled.div`
  font-family: 'Orbitron', sans-serif;
  font-size: 2.5rem;
  font-weight: 900;
  color: #FFD700;
  text-transform: uppercase;
  letter-spacing: -3px;
  line-height: 1;
  text-shadow: 
    2px 2px 4px rgba(0,0,0,0.5),
    -2px -2px 4px rgba(255,215,0,0.3);
`

const LogoSubtitle = styled.div`
  font-size: 0.8rem;
  color: #FFD700;
  opacity: 0.7;
  margin-left: 5px;
  text-transform: lowercase;
`

const Logo: React.FC = () => {
  const deviceIsMobile = isMobile || isTablet

  return (
    <LogoContainer 
      $isMobile={deviceIsMobile}
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <LogoText>AVX</LogoText>
      <LogoSubtitle>Marketing</LogoSubtitle>
    </LogoContainer>
  )
}

export default Logo
