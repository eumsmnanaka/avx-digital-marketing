import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { FaBars, FaTimes } from 'react-icons/fa'

const HeaderContainer = styled.header`
  background-color: #000000;
  color: #FFD700;
  padding: 20px 50px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
`

const MobileMenuIcon = styled.div`
  cursor: pointer;
  font-size: 1.5rem;
  color: #FFD700;
`

const Navigation = styled.nav<{ isOpen: boolean }>`
  @media (max-width: 768px) {
    display: ${props => props.isOpen ? 'flex' : 'none'};
    flex-direction: column;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.9);
    z-index: 1000;
    padding-top: 60px;
    align-items: center;
  }
`

const NavLinks = styled(Link)`
  color: #FFD700;
  text-decoration: none;
  margin: 10px 0;
  font-size: 1.2rem;
  transition: color 0.3s ease;

  &:hover {
    color: #FFFFFF;
  }

  @media (min-width: 769px) {
    display: none;
  }
`

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <HeaderContainer>
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
