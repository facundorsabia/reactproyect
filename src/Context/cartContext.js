import {useState, createContext, useContext } from "react";

 const CartContext = createContext ([]);

 export const useCartContext = () => useContext (CartContext);

function CartContextProvider ({children}){

    // CART CONTEXT //
    const [cart, setCart ] = useState ([]);

    const addItem = (item) =>{
        setCart([...cart, item]);
    }

    const [qBuy, setqBuy] = useState(0);

    const addCart = (qty) => {
        setqBuy (qBuy+qty)
      }

    const clearCart = () => {
    setCart ([]);
    setqBuy(0)
  }

  const clearItem = (id) => {
    let item = cart.find(item => item.item.id === id);
    let index = cart.indexOf(item);
    cart.splice(index,1);
    setqBuy (qBuy-item.cantidad)
    setCart([...cart])
  }

  const totalPxQ = () => {
    return cart.reduce((total, item)=> (total + item.cantidad*item.item.price), 0)
  }

    return(
        <CartContext.Provider value={{
            cart,
            addItem,
            clearCart,
            addCart,
            qBuy,
            clearItem,
            totalPxQ
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider