import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Navbar from './component/Navbar'
import Footerpage from './component/Footer'
import Productlist from './pages/Productlist'
import Productdetail3 from './pages/Productdetail3'
import Login from './pages/Login'
import Home from './pages/Home'



function App() {

  return (
    < >
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/home' element={<Home />}>
            {/* <Route path='productlist' element={<Productlist />} /> */}
            <Route path='product/:id' element={<Productdetail3 />} /></Route>
        </Routes>
      </BrowserRouter>
    </>

  )
}

export default App
