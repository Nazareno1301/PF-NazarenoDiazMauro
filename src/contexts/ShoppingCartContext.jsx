import { createContext, useState } from "react";

export const CartContext = createContext(null)

export const ShoppingCartProvider = ({ children }) => {

    const { Cart, setCart } = useState([])

    const comision = 14




    return (
        <CartContext.Provider value={{Cart,setCart,comision}}>
            {children}
        </CartContext.Provider>

    )

}
export default ShoppingCartProvider