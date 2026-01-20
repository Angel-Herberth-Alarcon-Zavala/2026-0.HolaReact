import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Titulo from './Titulo'
import Cuerpo from './Cuerpo'

import './main.css'

const nombre = "Luis"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Titulo />
    <Cuerpo nom={ nombre } esMayorEdad={false} />
  </StrictMode>,
)
