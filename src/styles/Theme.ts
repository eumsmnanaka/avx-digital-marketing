import { createGlobalStyle } from 'styled-components';

export const theme = {
  colors: {
    primary: '#6a11cb',
    secondary: '#4a148c',
    background: 'rgba(255,255,255,0.95)',
    text: 'rgba(0,0,0,0.85)',
    gray: 'rgba(0,0,0,0.6)'
  },
  typography: {
    fontFamily: "'Inter', sans-serif",
    fontSize: {
      small: '0.875rem',
      medium: '1rem',
      large: '1.25rem'
    }
  },
  spacing: {
    xs: '0.5rem',
    sm: '1rem',
    md: '1.5rem',
    lg: '2rem'
  },
  borderRadius: {
    sm: '8px',
    md: '12px',
    lg: '16px'
  }
};

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    transition: all 0.3s ease;
  }

  html, body {
    font-family: ${theme.typography.fontFamily};
    background-color: ${theme.colors.background};
    color: ${theme.colors.text};
    line-height: 1.6;
    scroll-behavior: smooth;
    overscroll-behavior-x: none;
  }

  a {
    text-decoration: none;
    color: ${theme.colors.primary};
    transition: color 0.3s ease;
  }

  button {
    cursor: pointer;
    border: none;
    background: none;
  }

  input, textarea {
    font-family: ${theme.typography.fontFamily};
  }

  ::-webkit-scrollbar {
    width: 8px;
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background: ${theme.colors.primary};
    border-radius: 4px;
  }
`;

export type Theme = typeof theme;
