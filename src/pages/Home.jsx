import React from 'react'
import { BrowserRouter, Outlet, Route, Router, Routes } from 'react-router-dom'
import Navbar from '../component/Navbar'
import Footerpage from '../component/Footer'
import Productlist from '../pages/Productlist'
import Productdetail3 from '../pages/Productdetail3'

const Home = () => {
    return (
        <>
            <Navbar />
           <Outlet/>
           <Productlist/>
            <Footerpage />
        </>
    )
}

export default Home
