import React, { Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { AnimatePresence } from 'framer-motion'

// Importações de páginas
import Home from './pages/Home'
import Services from './pages/Services'
import About from './pages/About'
import Contact from './pages/Contact'

// Componentes
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'

// Estilos e temas
import { theme, GlobalStyles } from './styles/Theme'
import styled from 'styled-components'

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const Content = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
`

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <AppContainer>
          <Navbar />
          <Content>
            <Suspense fallback={<div>Carregando...</div>}>
              <AnimatePresence mode="wait">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/servicos" element={<Services />} />
                  <Route path="/sobre" element={<About />} />
                  <Route path="/contato" element={<Contact />} />
                </Routes>
              </AnimatePresence>
            </Suspense>
          </Content>
          <Footer />
        </AppContainer>
      </Router>
    </ThemeProvider>
  )
}

export default App
