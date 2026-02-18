import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import Front from './App'
import Body from './componet/Body'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Front /> */}
    <Body  />
  </StrictMode>,
)
