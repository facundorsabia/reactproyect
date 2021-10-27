import {useState, createContext, useContext } from "react";

 const CartContext = createContext ([]);

 export const useCartContext = () => useContext (CartContext);

function CartContextProvider ({children}){

    // CART CONTEXT //
    const [cart, setCart ] = useState ([]);

    const addItem = (item) =>{
        setCart([...cart, item]);
    }

    const clearCart = () => setCart([]);


    function clearItem(id){
        let index = cart.findIndex((item)=> item.item.id === id);
        cart.splice(index,1);
        setCart([...cart])
    }


    return(
        <CartContext.Provider value={{
            cart,
            addItem,
            clearCart,
            clearItem,
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider