import React, { useEffect } from 'react'
import { useCart } from '../context/cartContext'
import { useNavigate } from 'react-router-dom'
import { IoCartOutline } from 'react-icons/io5';

const ProductCard = ({product}) => {
    const {addToCart, cartItem} = useCart()
    const navigate = useNavigate()
    
    // useEffect(()=>{
    //  console.log("cart items from productCart",cartItem)   
    // },[])
    
  return (
    product?<div className='border relative border-gray-100 rounded-2xl cursor-pointer hover:scale-105 hover:shadow-2xl transition-all p-2 h-max'>
        <img src={product.images[0]} className='bg-gray-100 aspect-square' key={product.id} onClick={()=>navigate(`/products/${product.slug}`)} />
        <h1 className='line-clamp-2 p-1 font-semibold'>{product.title}</h1>
        <p className='my-1 text-lg text-gray-800 font-bold'>${product.price}</p>
        <button onClick={()=>addToCart(product)} className='bg-red-500 px-3 py-2 text-lg rounded-md text-white w-full cursor-pointer flex gap-2 items-center justify-center font-semibold'>
            <IoCartOutline className='w-6 h-6' />Add to Cart
        </button> 
      
    </div>:"there is no product"
  )
}

export default ProductCard
