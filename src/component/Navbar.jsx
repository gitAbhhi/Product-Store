import React from 'react'
import { Content, Footer, Header } from 'antd/es/layout/layout'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <Header className='flex items-center justify-between'><h1 className='text-white text-3xl'>FakeShop</h1>

            <div className=" hidden md:flex items-center space-x-4 text-xl text-white">
                <Link to="/home" className="text-white">Home</Link>
                <Link to="/menu" className="text-white">Menu</Link>
                <Link to="/about" className="text-white">About</Link>
                <Link to="/contact" className="text-white">Contact Us</Link>
            </div>
        </Header>
    )
}

export default Navbar
