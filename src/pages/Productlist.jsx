import axios from 'axios'
import React, { useEffect, useCallback,useMemo } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import { set_Product } from '../redux/action/Productaction'


const Productlist = () => {
    const products=useSelector((state)=>state.allProduct.products)
    const dispatch=useDispatch()

    //fetch product using api
    const fetchProducts=async()=>{
       const res= await axios.get("https://fakestoreapi.com/products").catch((err)=>{console.log("err ",err)})
        dispatch(set_Product(res.data))
    }

    useEffect(()=>{
        fetchProducts()
    },[])
    // console.log("Products :", products);
    return (
        <div>
            <div className='w-full h-full ' >
               
                <div className='grid  bg-gray-800 p-4 gap-3 grid-cols-1 sm:grid-cols-2  md:grid-cols-4 justify-center mx-auto'>
                    {products.length > 0 ? (products.map((product) => (
                <Link key={product.id} to={`product/${product.id}`}>
                        <div   className="flex justify-center">
                            <div className="w-[240px] h-[310px] hover:w-[345px] md:w-[340px] rounded-xl bg-white p-3" >
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

export default Productlist
