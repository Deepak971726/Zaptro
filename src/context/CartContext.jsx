import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";


export const CartItemContext=createContext(null)

export const CartProvider = ({ children }) => {
    const [cartItem, setCartItem] = useState([])
    const [status, setStatus] = useState(false)

    const addToCart = (product) => {
         const itemInCart = cartItem.find((item)=>item.id===product.id)
         
         if(itemInCart){
            const updatedCartItem = cartItem.map((item)=>item.id===product.id?{...item, quantity:item.quantity+1}:item)
            setCartItem(updatedCartItem)
            toast.success("Product quantity increased")
         }
         else{
            setCartItem([...cartItem,{...product, quantity:1}])
            toast.success("product added to cart")
         }
    }

    const updateQuantity = (cartItem, productId, action) => {
        
        const updatedCartItem = cartItem.map((item)=>{
            if(item.id===productId){
                let newUnit = item.quantity
                if(action==='increase'){
                    newUnit = newUnit+1   
                    toast.success("Quantity is increased!")
                }
                else{
                    newUnit = newUnit-1;
                      toast.success("Quantity is decreased!")
                }
                return newUnit>0?{...item, quantity:newUnit}:null
            }
            return item
        }
        ).filter((item)=>item!=null) 
        
        setCartItem(updatedCartItem)
        
    }

    const deleteItem = (productId) => {
          const updateCartItem = cartItem.filter((item)=>item.id!==productId)
          setCartItem(updateCartItem)
          toast.success("delete cart item successfully")
    }

    return <CartItemContext.Provider value={{ status, setStatus, cartItem, setCartItem, addToCart, updateQuantity, deleteItem }}>
        {children}
    </CartItemContext.Provider>
}

export const useCart = () => {
    return useContext(CartItemContext)
}