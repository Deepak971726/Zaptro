import axios from "axios";
import { createContext, useContext, useState } from "react";


export const DataContext = createContext(null);

export const DataProvider = ({children})=>{
    const [data, setData] = useState(null)
    
    // fetch all product from api
    const fetchAllProducts = async ()=>{
        
        try {
            const response = await axios.get(import.meta.env.VITE_PRODUCTS_API)
            const productData = response.data
            console.log(response)
            setData(productData)
            console.log(data)
    
            
        } catch (error) {
            console.log("something went wrong while fething products from API ::: ", error)
        }
        // console.log(data)
    }    
    const getUniqueCategory = ()=>{
        let newVal = data?.map((item)=>{
            return item.category.name
        })
        
        newVal = ["All",...new Set(newVal)]
        console.log(newVal)
        return newVal
    }
    
    return <DataContext.Provider value={{data, setData, fetchAllProducts,getUniqueCategory}}>
        {children}
    </DataContext.Provider>
}

export const useData = ()=>{
    return useContext(DataContext)
}