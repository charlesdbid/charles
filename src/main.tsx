import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/home'
// @ts-ignore
import './styles/global.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
)