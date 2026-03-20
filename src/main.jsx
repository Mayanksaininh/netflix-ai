
import { createRoot } from 'react-dom/client'
import './index.css'
import Body from './componet/Body'
import { Provider } from 'react-redux'
import AppStore from './utils/AppStore'


createRoot(document.getElementById('root')).render(
    
    <Provider store = {AppStore}
    ><Body/> </Provider>
  
)
