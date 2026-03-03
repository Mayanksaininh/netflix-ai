import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import Front from './App'
import Body from './componet/Body'
import { Provider } from 'react-redux'
import AppStore from './utils/AppStore'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Front /> */}
    <Provider store = {AppStore}
    ><Body/> </Provider>
  </StrictMode>,
)
