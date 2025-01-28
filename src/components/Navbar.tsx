import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { isMobile, isTablet } from 'react-device-detect'
import { FaHome, FaEnvelope } from 'react-icons/fa'
import Logo from './Logo'

interface NavContainerProps {
  $isMobile?: boolean;
}

interface NavLinksProps {
  $isMobile?: boolean;
}

interface NavLinkProps {
  $isMobile?: boolean;
  $isActive?: boolean;
}

interface NavIconProps {
  $isMobile?: boolean;
  $isActive?: boolean;
}

const NavContainer = styled.nav<NavContainerProps>`
  display: ${props => props.$isMobile ? 'flex' : 'flex'};
  justify-content: space-between;
  align-items: center;
  background-color: transparent;
  padding: ${props => props.$isMobile ? '0.5rem' : '1rem 2rem'};
  position: ${props => props.$isMobile ? 'fixed' : 'fixed'};
  ${props => props.$isMobile 
    ? 'bottom: 0; left: 0; right: 0; z-index: 1000; backdrop-filter: blur(5px);'
    : 'top: 0; left: 0; width: 100%; z-index: 1000;'
  }
`

const NavLinks = styled(motion.div)<NavLinksProps>`
  display: flex;
  align-items: center;
  gap: ${props => props.$isMobile ? '1rem' : '2rem'};
  ${props => props.$isMobile 
    ? 'width: 100%; justify-content: space-around; padding: 0.5rem 0;'
    : ''
  }
`

const NavLink = styled(Link)<NavLinkProps>`
  text-decoration: none;
  color: ${props => props.$isActive 
    ? '#FFFFFF' 
    : (props.$isMobile 
      ? 'rgba(255,255,255,0.6)' 
      : '#FFD700')
  };
  font-weight: 500;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: ${props => props.$isMobile ? 'column' : 'row'};
  align-items: center;
  gap: ${props => props.$isMobile ? '0.2rem' : '0.5rem'};
  font-size: ${props => props.$isMobile ? '0.8rem' : '1rem'};
  opacity: ${props => props.$isActive ? 1 : 0.7};
  
  &:hover {
    color: #FFFFFF;
    opacity: 1;
    transform: ${props => props.$isMobile 
      ? 'translateY(-3px) scale(1.05)' 
      : 'scale(1.05)'
    };
  }
`

const NavIcon = styled.span<NavIconProps>`
  font-size: 1.5rem;
  color: ${props => props.$isActive 
    ? '#FFFFFF' 
    : (props.$isMobile 
      ? 'rgba(255,255,255,0.6)' 
      : '#FFD700')
  };
  transition: color 0.3s ease, transform 0.3s ease;
  opacity: ${props => props.$isActive ? 1 : 0.7};

  &:hover {
    color: #FFFFFF;
    opacity: 1;
    transform: scale(1.1);
  }
`

const LogoContainer = styled(motion.div)<NavContainerProps>`
  display: ${props => props.$isMobile ? 'none' : 'block'};
`

const Navbar: React.FC = () => {
  const deviceIsMobile = isMobile || isTablet
  const [activeLink, setActiveLink] = useState<string | null>(null)

  const handleLinkClick = (path: string) => {
    setActiveLink(path)
  }

  return (
    <NavContainer $isMobile={deviceIsMobile}>
      {!deviceIsMobile && (
        <LogoContainer
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Logo />
        </LogoContainer>
      )}
      
      <NavLinks $isMobile={deviceIsMobile}>
        <NavLink 
          to="/" 
          $isMobile={deviceIsMobile}
          $isActive={activeLink === '/'}
          onClick={() => handleLinkClick('/')}
        >
          <NavIcon 
            $isMobile={deviceIsMobile}
            $isActive={activeLink === '/'}
          >
            <FaHome />
          </NavIcon>
          {deviceIsMobile && 'Início'}
        </NavLink>
        <NavLink 
          to="/contato" 
          $isMobile={deviceIsMobile}
          $isActive={activeLink === '/contato'}
          onClick={() => handleLinkClick('/contato')}
        >
          <NavIcon 
            $isMobile={deviceIsMobile}
            $isActive={activeLink === '/contato'}
          >
            <FaEnvelope />
          </NavIcon>
          {deviceIsMobile && 'Contato'}
        </NavLink>
      </NavLinks>
    </NavContainer>
  )
}

export default Navbar
