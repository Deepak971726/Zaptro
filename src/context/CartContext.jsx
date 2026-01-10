import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";


export const CartItemContext=createContext(null)

export const CartProvider = ({ children }) => {
    const [cartItem, setCartItem] = useState([])

    const addToCart = (product) => {
         
    }

    const updateQuantity = (cartItem, productId, action) => {
        
        
    }

    const deleteItem = (productId) => {
         return null
    }

    return <CartItemContext.Provider value={{ cartItem, setCartItem, addToCart, updateQuantity, deleteItem }}>
        {children}
    </CartItemContext.Provider>
}

export const useCart = () => {
    return useContext(CartItemContext)
}