import React, { useEffect, useState } from 'react'
import { useData } from '../context/DataContext'
import { Link } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import FilterSection from '../components/FilterSection'

const Products = () => {
  const {data, fetchAllProducts} = useData()
  const [search, setSearch] = useState("")
  const [category, setCategory] = useState("ALL")
  const [priceRange, setPriceRange] = useState([0,5000])
  const [productData, setProductData] = useState()
  // const [loading, setLoading]= useState(true)
  
  
  const handleOnChangeCategory=(e)=>{
      const selectedCategory = e.target.value; // ✅ fresh value

     setCategory(selectedCategory);
      
      // const filtre = category.toLowerCase() ==='all'? data: data.filter(item => item.category.name.toLowerCase() === category.toLowerCase());
      // const actualdata = filtre.filter((item)=>Number(item.price)<=priceRange[1])
      // setProductData(actualdata)
      // console.log('filtre data',actualdata)
      
      
      
  }
  
  useEffect(() => {
      const filtre = category.toLowerCase() ==='all'? data: data.filter(item => item.category.name.toLowerCase() === category.toLowerCase())
      const actualData = filtre.filter((item)=>Number(item.price)<=priceRange[1])
      // setProductData(actualdata)
  setProductData(actualData);
}, [category, priceRange, data]);
  
  useEffect(()=>{
    setProductData(data) 
  },[data])
 
  
  useEffect(()=>{
     fetchAllProducts()
     
    // setLoading(false)
    
  },[])
  
  
  
  
  return (
     <div>
      <div className='max-w-6xl mx-auto px-4 mb-10'>
              <div className='flex gap-8'>
                <FilterSection search={search} setSearch={setSearch} priceRange={priceRange} setPriceRange={setPriceRange} category={category} setCategory={setCategory} handleOnChangeCategory={handleOnChangeCategory}/>
                {
                  productData?.length > 0 ? (
                    <div className='flex flex-col justify-center items-center'>
                      <div className='grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-7 mt-10'>
                        {
                          productData?.map((product, index) => {
                            return <ProductCard key={index} product={product} />
                          })
                        }
                      </div>
                       
                    </div>
                  ) : (
                    <div className='flex justify-center items-center md:h-[600px] md:w-[900px] mt-10'>
                           not found{/* <Lottie animationData={notfound} classID='w-[500px]'/> */}
                    </div>
                  )
                }

              </div>
      </div>
    </div> 
    
  )
}

export default Products
