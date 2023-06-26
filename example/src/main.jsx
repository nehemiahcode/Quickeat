import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Contents from './Contents.jsx'
import './index.css'
import './App.css'
import { ScrollToTopButton } from './SrollTop.jsx'
import { About, Details, Cards, Testimonials, Subscribe, Footer } from './Contents.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Contents/>
    <About/>
    <Details/>
    <Cards/>
    <Testimonials/>
    <ScrollToTopButton/>
    <Subscribe/>
    <Footer/>
  </React.StrictMode>,
)
