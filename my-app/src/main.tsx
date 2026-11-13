import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {CheckList} from './Components/CheckList/index.tsx'
import { Wishlist } from './Components/Wishlist/index.tsx'
import { checkListArray } from './Fixtures/CheckListArray/index.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Wishlist title="My wishlist" list={checkListArray} />
    <CheckList />
  </StrictMode>
  
)
