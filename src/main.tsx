import React from 'react'
import ReactDOM from 'react-dom/client'
import './global.module.css'
import { Header } from './components/Header'
import { Body } from './components/Body'
import { Footer } from './components/Footer'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Header />
    <Body />
    <Footer />
  </React.StrictMode>,
)
