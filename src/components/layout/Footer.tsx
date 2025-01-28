import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const FooterContainer = styled(motion.footer)`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  padding: 2rem;
  text-align: center;
  color: ${props => props.theme.colors.text};
`

const CompanyName = styled.p`
  font-weight: bold;
`

const Footer: React.FC = () => {
  return (
    <FooterContainer
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <CompanyName>Site Forge</CompanyName>
      <p> 2024 SiteForge. Todos os direitos reservados.</p>
    </FooterContainer>
  )
}

export default Footer
