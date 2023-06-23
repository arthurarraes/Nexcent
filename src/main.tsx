import React from 'react'
import ReactDOM from 'react-dom/client'
import './global.module.css'
import { Header } from './components/Header'
import { Body } from './components/Body'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Header />
    <Body />
  </React.StrictMode>,
)
