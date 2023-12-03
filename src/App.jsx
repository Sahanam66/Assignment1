import React from 'react'
import Nav from './Components/Nav'
import Home from './Components/Home'
import { Route, Router, Routes } from 'react-router-dom'
import Features from './Components/Features'
import Faq from './Components/Faq'
import Pricing from './Components/Pricing'
import Testimonial from './Components/Testimonial'

const App = () => {
  return (
    <div>
      
        <Nav/>
        <br />
        <Home/>
        
        <Features/>
        <Faq/>
        <Pricing/>
        <Testimonial/>
        
    </div>
  )
}
export default App