import { createGlobalStyle } from 'styled-components'
import { isMobile, isTablet } from 'react-device-detect'

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
  }

  html {
    font-size: ${isMobile || isTablet ? '14px' : '16px'};
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Montserrat', sans-serif;
    background-color: #0a0a0a;
    color: #FFD700;
    line-height: 1.6;
    position: relative;
    overflow-x: hidden;
    perspective: 1px;
    height: 100%;
    padding: ${isMobile || isTablet ? '0 10px' : '0'};
  }

  body::before,
  body::after {
    content: "";
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }

  body::before {
    background: 
      radial-gradient(circle at 30% 30%, rgba(255,255,255,0.05), transparent 50%),
      radial-gradient(circle at 70% 70%, rgba(255,255,255,0.05), transparent 50%),
      linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
    background-size: ${isMobile || isTablet ? '600% 600%' : '400% 400%'};
    transform: translateZ(-1px) scale(2);
    opacity: 0.7;
    transition: transform 0.1s linear;
  }

  body::after {
    background: 
      repeating-radial-gradient(
        circle at var(--particle-x, 50%) var(--particle-y, 50%), 
        transparent 0%, 
        rgba(255,215,0,0.05) 2%, 
        transparent 4%
      );
    animation: moveParticles 10s ease-in-out infinite;
    opacity: 0.5;
    z-index: -2;
  }

  @keyframes moveParticles {
    0%, 100% {
      transform: 
        translateX(var(--particle-x, 0)) 
        translateY(var(--particle-y, 0)) 
        scale(1);
    }
    50% {
      transform: 
        translateX(calc(var(--particle-x, 0) * 1.2)) 
        translateY(calc(var(--particle-y, 0) * 1.2)) 
        scale(1.1);
    }
  }

  #root {
    padding-top: ${isMobile || isTablet ? '40px' : '80px'};
    position: relative;
    z-index: 1;
    transform-style: preserve-3d;
  }

  a {
    color: #FFD700;
    text-decoration: none;
    transition: color 0.3s ease;
  }

  a:hover {
    color: #FFEC00;
  }

  button {
    font-family: 'Montserrat', sans-serif;
    cursor: pointer;
    transition: all 0.3s ease;
    background-color: #FFD700;
    color: #000000;
    border: none;
    padding: 15px 30px;
    font-size: 1.2rem;

    &:hover {
      background-color: #FFEC00;
    }
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
    margin-bottom: 1rem;
  }

  input, textarea, select {
    font-family: 'Montserrat', sans-serif;
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 0.5rem;
    width: 100%;
  }

  /* Scrollbar Styling */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: rgba(255,215,0,0.1);
  }

  ::-webkit-scrollbar-thumb {
    background: rgba(255,215,0,0.5);
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: rgba(255,215,0,0.7);
  }

  /* Touch Optimization for Mobile */
  ${isMobile || isTablet ? `
    * {
      -webkit-tap-highlight-color: transparent;
      touch-action: manipulation;
    }

    input, textarea, button, select {
      font-size: 16px; /* Prevent auto zoom on iOS */
    }
  ` : ''}
`
