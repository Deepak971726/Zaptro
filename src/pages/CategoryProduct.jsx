import React, { useEffect, useState } from 'react'
import {useNavigate ,useParams } from 'react-router-dom'
import { useData } from '../context/DataContext'
import ProductListView from '../components/ProductListView'
import { ChevronLeft } from 'lucide-react'
import Pagination from '../components/pagination'

const CategoryProduct = () => {
    const params = useParams()
    const [productData, setProductData] = useState()
    const {fetchAllProducts, data} = useData()
    const navigate = useNavigate()
    const [currentPage, setCurrentPage] = useState(1)
    const [postPerPage, setPostPerPage] = useState(3)
    const [currentData, setCurrentData] = useState()
    
    
    useEffect(()=>{
        
        if(productData){
            const lastPostIndex = currentPage * postPerPage
            const firstPostIndex = lastPostIndex - postPerPage
            setCurrentData(productData.slice(firstPostIndex,lastPostIndex))
        }
        else{
            console.log("product data khali hai bhayyii")
        }
       
    },[currentPage])
    
    useEffect(()=>{
         if(data){
            const filtre = params.category.toLowerCase() ==='all'? data: data.filter(item => item.category.name.toLowerCase() === params.category.toLowerCase())
            // console.log("data aaya h use locally set kr diya hai",filtre)
            // setProductData(filtre.slice(firstPostIndex,lastPostIndex))
            setProductData(filtre)
            const lastPostIndex = currentPage * postPerPage
            const firstPostIndex = lastPostIndex - postPerPage
            setCurrentData(filtre.slice(firstPostIndex,lastPostIndex))
            // console.log("current data",currentData)
            console.log("product data",productData)
            // console.log(lastPostIndex,"bich me gaop", firstPostIndex)
        }
        
       
        else{
            console.log("data nhi aaya abhi tk")
        }
        
        
    },[data])
    
    useEffect(()=>{
        fetchAllProducts()
        console.log("data",data)
        
        
    },[])
    
    
   
    
    
    
  return (
   <div>
      {
        currentData ? (
          <div className='max-w-6xl mx-auto mt-10 mb-10 px-4'>
             <button onClick={()=>navigate('/')} className='bg-gray-800 mb-5 text-white px-3 py-1 rounded-md cursor-pointer flex gap-1 items-center'><ChevronLeft/> Back</button>
             {
              currentData.map((product, index) =>{
                return <ProductListView key={index} product={product}/>
              })
             }
             <Pagination totalPost={productData.length} postPerPage={postPerPage} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
          </div>
        ):(
          <div className='flex items-center justify-center h-[400px]'>
             Loading .....
          </div>
        )
      }
    </div>
  )
}

export default CategoryProduct
