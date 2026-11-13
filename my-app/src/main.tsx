import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Counter } from './Components/Counter/index.tsx'
import {CheckList} from './Components/CheckList/index.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Counter />
    <CheckList />
  </StrictMode>
  
)
