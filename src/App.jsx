import { useContext, useEffect, useState } from 'react'
import './App.css'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Navbar from './component/Navbar'
import Footerpage from './component/Footer'
import Productdetail from './pages/Productdetail'
import Login from './pages/Login'
import Home from './pages/Home'
import { StoreContext } from './component/context/StoreContext'
import Cart from './pages/Cart'
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"



function App() {
  const { token } = useContext(StoreContext);
  const navigate = useNavigate();
  return (
    < >
      <ToastContainer />
      {token ? (<>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='product/:id' element={<Productdetail />} />
        </Routes>
        <Footerpage />
      </>) : (
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
      )
      }

    </>

  )
}

export default App
