import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Titulo from './Titulo'

const nombre = "Jesus"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Titulo />
    <div>Hola React! { nombre }</div>
    <p>Esto es un parraffgfggo</p>
  </StrictMode>,
)
