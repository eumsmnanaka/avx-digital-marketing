import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const LogoContainer = styled(motion.div)`
  position: fixed;
  top: 10px;
  left: 20px;
  z-index: 1100;
  display: flex;
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
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.55rem;
  font-weight: 500;
  color: rgba(255,236,0,0.7);
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-left: 8px;
  transform: translateY(6px);
  border-bottom: 1px solid rgba(255,236,0,0.3);
  padding-bottom: 2px;
`

const Logo: React.FC = () => {
  return (
    <LogoContainer
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, type: 'spring' }}
    >
      <LogoText>AVX</LogoText>
      <LogoSubtitle>Marketing</LogoSubtitle>
    </LogoContainer>
  )
}

export default Logo
