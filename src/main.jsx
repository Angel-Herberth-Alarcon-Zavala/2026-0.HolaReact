import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Titulo from './Titulo'
import Cuerpo from './Cuerpo'

const nombre = "Jesus"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Titulo />
    <Cuerpo />
  </StrictMode>,
)
