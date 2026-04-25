import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

// src/
// ├── App.jsx                ← só monta os componentes, sem conteúdo
// ├── data/
// │   └── conteudo.js        ← ✏️ edite aqui preços, horários, fotos
// ├── styles/
// │   └── tema.js            ← 🎨 edite aqui cores e fontes
// ├── hooks/
// │   └── useInView.js       ← lógica de animação reutilizável
// └── components/
//     ├── Navbar.jsx
//     ├── HeroSection.jsx
//     ├── Carousel.jsx
//     ├── StatsBar.jsx
//     ├── SobreSection.jsx
//     ├── ModalidadesSection.jsx
//     ├── HorariosSection.jsx
//     ├── PlanosSection.jsx
//     ├── ContatoSection.jsx
//     ├── Footer.jsx
//     ├── WhatsAppButton.jsx
//     └── Fade.jsx