import React, {useState, useEffect } from 'react'
import Donation from './component/Donation'
import Footer from './component/Footer'
import Hedder from './component/Hedder'

const App = () => {
  
  return (
    <div>
    <Hedder />
      <Donation />
      <Footer />
      </div>
  )
  }

export default App