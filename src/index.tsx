import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

// Mouse movement tracking
document.addEventListener('mousemove', (e) => {
  const mouseX = -(e.clientX - window.innerWidth / 2) / 50
  const mouseY = -(e.clientY - window.innerHeight / 2) / 50
  
  document.body.style.setProperty('--mouse-x', `${mouseX}px`)
  document.body.style.setProperty('--mouse-y', `${mouseY}px`)
})

// Particle movement tracking
document.addEventListener('mousemove', (e) => {
  const percentX = (e.clientX / window.innerWidth) * 100
  const percentY = (e.clientY / window.innerHeight) * 100
  
  document.body.style.setProperty('--particle-x', `${percentX}%`)
  document.body.style.setProperty('--particle-y', `${percentY}%`)
})

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
