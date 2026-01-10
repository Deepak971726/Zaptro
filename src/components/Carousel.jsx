import React, { useEffect } from 'react'
import { useData } from '../context/DataContext'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import Category from './Category';

const Carousel = () => {
    const {fetchAllProducts,data} = useData()
    useEffect(()=>{
        fetchAllProducts()
        
    },[])
    // useEffect(()=>{
    //     const category = getUniqueCategory()
    //     console.log("category ::::: ",category)
    // },[data])
    
      
    
  return (
     <div>
            
    </div>
  )
}

export default Carousel
