import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import './bootstrap.min.css'
import recipieStore from './Redux/recipieStore.js'
import { Provider } from 'react-redux'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Provider store = {recipieStore}>
    <App />
    </Provider>
    </BrowserRouter>
  </StrictMode>,
)
