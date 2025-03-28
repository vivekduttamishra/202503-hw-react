import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { StatusProvider } from './contexts/StatusContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <StatusProvider>
        <App />
      </StatusProvider>
    </BrowserRouter>
  </StrictMode>,
)
