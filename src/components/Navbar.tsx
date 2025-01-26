import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const NavContainer = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0,0,0,0.7);
  padding: 1rem;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
`

const NavList = styled.ul`
  display: flex;
  gap: 2rem;
  list-style: none;
  margin: 0;
  padding: 0;
`

const NavItem = styled(motion.li)`
  a {
    text-decoration: none;
    color: #FFD700;
    font-weight: bold;
    transition: color 0.3s ease;

    &:hover {
      color: #FFEC00;
    }
  }
`

const Navbar: React.FC = () => {
  return (
    <NavContainer>
      <NavList>
        <NavItem
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link to="/">Início</Link>
        </NavItem>
        <NavItem
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link to="/contato">Contato</Link>
        </NavItem>
      </NavList>
    </NavContainer>
  )
}

export default Navbar
