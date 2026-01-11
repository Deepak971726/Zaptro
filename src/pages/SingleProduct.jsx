import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useData } from '../context/DataContext';
import ProductCard from '../components/ProductCard';
import { useCart } from '../context/CartContext';
import Breadcrums from '../components/Breadcrums';
import { IoCartOutline } from 'react-icons/io5';

const SingleProduct = () => {
    const param = useParams();
    const [productData, setProductData] = useState()
    const {addToCart}=useCart()
     
    
    const {data, fetchAllProducts} = useData()
    
    
    useEffect(()=>{
        
        const product = data?.filter((item)=> {
            
            if(item.slug===param.slug){
                setProductData(item)
                return true
            }
            else{
                return false
            }
        })
        console.log(productData)
       
    },[data])
    
    useEffect(()=>{
        fetchAllProducts()
    },[])
    
    
    
    
  return (
      <>
            {
                productData ? <div className='px-4 pb-4 md:px-0'>
                     <Breadcrums title={productData.title}/>
                     <div className='max-w-6xl mx-auto md:p-6 grid grid-cols-1 md:grid-cols-2 gap-10'>
                        {/* product image */}
                        <div className='w-full'>
                            <img src={productData.images[0]} 
                            alt={productData.title} 
                            className='rounded-2xl w-full object-cover'/>
                        </div>
                        {/* product details */}
                        <div className='flex flex-col gap-6'>
                            <h1 className='md:text-3xl text-xl font-bold text-gray-800'>{productData.title}</h1>
                            <div className='text-gray-700'>{productData.category.name?.toUpperCase()}</div>
                            <p className='text-xl text-red-500 font-bold'>${productData.price} <span className='line-through text-gray-700'>${productData.price}</span> <span className='bg-red-500 text-white px-4 py-2 rounded-full'>0% discount</span></p>
                            <p className='text-gray-600'>{productData.description}</p>

                            {/* qunatity selector */}
                            <div className='flex items-center gap-4'>
                                <label htmlFor="" className='text-sm font-medium text-gray-700'>Quantity:</label>
                                <input type="number" min={1} value={1} className='w-20 border border-gray-300 rounded-lg px-3 py-1 focus:outline-none focus:ring-2 foucs:ring-red-500'/>
                            </div>

                            <div className='flex gap-4 mt-4'>
                                <button onClick={()=>addToCart(productData)} className='px-6 flex gap-2 py-2 text-lg bg-red-500 text-white rounded-md'><IoCartOutline className='w-6 h-6'/> Add to Cart</button>
                            </div>
                        </div>
                     </div>
                </div> : "not found"
                    
            }
        </>
  )
}

export default SingleProduct
