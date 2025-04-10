import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { select_Product,remove_Product } from '../redux/action/Productaction'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'

const Productdetail3 = () => {
    const product=useSelector((state)=>state.product)
    const dispatch=useDispatch()
    const {id}=useParams()

    //fetch product detail 
    const fetchProduct=async(id)=>{
        const res= await axios.get(`https://fakestoreapi.com/products/${id}`).catch((err)=>{console.log("err ",err)})
         dispatch(select_Product(res.data))
     }
 
     useEffect(()=>{
        if(id && id !=="") fetchProduct(id)
         return ()=>{
            dispatch(remove_Product())
         }
     },[id])

     if(product)
  return (
    <div className='block md:flex w-full h-[100vh] '>
    <div className='md:w-[40%] h-[50%] md:h-full flex items-center justify-center'>
        <img src={product.image} alt="img" width="200" />
    </div>
    <div className='md:w-[60%] h-[50%] md:h-full bg-gray-800 text-white p-[50px] md:p-[150px]'>
        <h1 className='text-2xl md:text-4xl font-semibold mt-4'>{product.title}</h1>
        <p className='text-1xl mt-3'>{product.description}</p>
        <h3 className='text-2xl md:text-3xl font-bold mt-2'>Price: ${product.price}</h3>
    </div>
</div>
  )
}

export default Productdetail3
