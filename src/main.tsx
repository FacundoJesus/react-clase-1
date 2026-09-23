import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Pepito from './Pepito'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Pepito />
  </StrictMode>,
)
