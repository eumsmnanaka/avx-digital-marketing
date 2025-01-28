import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { motion, AnimatePresence } from 'framer-motion'
import { FaBars, FaTimes } from 'react-icons/fa'

const NavbarContainer = styled(motion.nav)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;  
  display: flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.95);  
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);  
  z-index: 1000;
  backdrop-filter: blur(5px);  
`

const NavContent = styled.div`
  width: 100%;
  max-width: 1400px;  
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Logo = styled(Link)`
  font-size: 1.75rem;
  font-weight: 700;
  color: #2c3e50;
  letter-spacing: -0.03em;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  opacity: 0.9;
  transition: opacity 0.3s ease;
  font-family: 'Inter', sans-serif;

  &:hover {
    opacity: 1;
  }
`

const LogoIcon = styled.span`
  width: 40px;
  height: 40px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  background: linear-gradient(135deg, #6a11cb 0%, #2575fc 100%);
`

const NavLinks = styled(motion.div)<{ $isOpen: boolean }>`
  @media (max-width: 768px) {
    position: fixed;
    top: 80px;
    left: 0;
    width: 100%;
    height: calc(100vh - 80px);
    background: rgba(255, 255, 255, 0.95);  
    backdrop-filter: blur(5px);  
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transform: ${props => props.$isOpen ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 0.3s ease-in-out;
    z-index: 999;
    gap: 2rem;
    padding: 2rem;
  }

  @media (min-width: 769px) {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
`

const StyledNavLink = styled(NavLink)`
  color: #6a11cb;
  text-decoration: none;
  font-weight: 500;
  font-size: 0.95rem;
  font-family: 'Inter', sans-serif;
  position: relative;
  transition: all 0.3s ease;
  opacity: 1;  
  letter-spacing: -0.02em;

  &:hover {
    opacity: 1;
    color: #6a11cb;  
  }

  &::after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -5px;
    left: 0;
    background-color: #6a11cb;  
    transition: all 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }

  &.active {
    opacity: 1;
    color: #6a11cb;  

    &::after {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin: 1rem 0;
    opacity: 1;  
    transform: translateY(0);
    transition: opacity 0.5s ease, transform 0.5s ease;
  }
`

const MobileMenuToggle = styled.button`
  display: none;
  background: none;
  border: none;
  color: #2c3e50;
  font-size: 1.5rem;
  cursor: pointer;
  z-index: 1001;

  @media (max-width: 768px) {
    display: block;
  }
`

const navLinks = [
  { path: '/', label: 'Início' },
  { path: '/servicos', label: 'Serviços' },
  { path: '/sobre', label: 'Sobre' },
  { path: '/contato', label: 'Contato' }
]

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  console.log('Navbar Links:', navLinks)
  console.log('Is Menu Open:', isOpen)

  return (
    <NavbarContainer
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <NavContent>
        <Logo to="/" onClick={closeMenu}>
          <LogoIcon>SF</LogoIcon>
          SiteForge
        </Logo>

        <MobileMenuToggle onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </MobileMenuToggle>

        <NavLinks 
          $isOpen={isOpen}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ 
            duration: 0.5, 
            delayChildren: 0.2,
            staggerChildren: 0.1 
          }}
        >
          {navLinks.map((link, index) => (
            <StyledNavLink 
              key={index}
              to={link.path} 
              onClick={closeMenu}
              className={({ isActive }) => isActive ? 'active' : ''}
            >
              {link.label}
            </StyledNavLink>
          ))}
        </NavLinks>
      </NavContent>
    </NavbarContainer>
  )
}

export default Navbar
