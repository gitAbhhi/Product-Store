import axios from 'axios'
import React, { useEffect, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Productdetail from '../pages/Productdetail'
import { StoreContext } from '../component/context/StoreContext'

const Home = () => {

   const {products,setproducts}=useContext(StoreContext)

    //fetch product using fake api
    const fetchProducts=async()=>{
       const res= await axios.get("https://fakestoreapi.com/products").catch((err)=>{console.log("err ",err)})
        setproducts(res.data)
    }

    useEffect(()=>{
        fetchProducts()
    },[])

    return (
        <div>
            <div className='w-full min-h-screen bg-gray-800' >
                <div className='grid   p-4 gap-3 grid-cols-1 sm:grid-cols-2  md:grid-cols-4 justify-center mx-auto'>
                    {products.length > 0 ? (products.map((product) => (
                <Link key={product.id} to={`product/${product.id}`}>
                        <div   className="flex justify-center">
                            <div className="h-[310px] shadow-md hover:shadow-amber-50 w-[340px] rounded-xl bg-white p-3" >
                                <img
                                    className="h-[150px] object-contain w-full rounded-lg"
                                    src={product.image}
                                    alt={product.title}
                                />
                                <div className="p-[5px] text-center ">
                                    <h4 className="font-bold h-[90px]">{product.title}</h4>
                                    <p className="text-2xl font-bold   text-gray-600"> $ {product.price}</p>
                                </div>
                            </div>
                        </div>
                        </Link>
                    ))) : (
                        <p className="text-white text-center col-span-3">Loading...</p>
                    )}
                </div>

            </div>
        </div>
    )

}

export default Home
