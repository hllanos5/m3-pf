import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import "primereact/resources/themes/lara-light-cyan/theme.css";
import 'primeicons/primeicons.css';
import ClimaProvider from './context/ClimaContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClimaProvider>
      <App />
    </ClimaProvider>
  </StrictMode>,
)
