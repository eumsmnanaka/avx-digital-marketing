import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { FaBars, FaTimes } from 'react-icons/fa'

const HeaderContainer = styled.header`
  background-color: #000000;
  color: #FFD700;
  padding: 20px 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
`

const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: bold;
  color: #FFD700;
`

const Navigation = styled.nav<{ isOpen: boolean }>`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    position: fixed;
    top: 0;
    right: ${props => props.isOpen ? '0' : '-100%'};
    width: 250px;
    height: 100vh;
    background-color: #000000;
    padding: 100px 20px;
    transition: right 0.3s ease;
  }
`

const NavLinks = styled(Link)`
  color: #FFD700;
  margin: 0 15px;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #FFEC00;
  }

  @media (max-width: 768px) {
    margin: 15px 0;
    font-size: 1.2rem;
  }
`

const MobileMenuIcon = styled.div`
  display: none;
  color: #FFD700;
  font-size: 1.5rem;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <HeaderContainer>
      <Logo to="/">AVX Marketing</Logo>
      
      <MobileMenuIcon onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </MobileMenuIcon>

      <Navigation isOpen={isOpen}>
        <NavLinks to="/" onClick={toggleMenu}>Início</NavLinks>
        <NavLinks to="/servicos" onClick={toggleMenu}>Serviços</NavLinks>
        <NavLinks to="/portfolio" onClick={toggleMenu}>Portfólio</NavLinks>
        <NavLinks to="/contato" onClick={toggleMenu}>Contato</NavLinks>
      </Navigation>
    </HeaderContainer>
  )
}

export default Header
