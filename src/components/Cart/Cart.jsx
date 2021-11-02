import './Cart.css';
import React from 'react';
import { useCartContext } from '../../Context/cartContext';
import {Link} from 'react-router-dom';

const Cart = () => {


    const {cart, clearCart, clearItem} = useCartContext();

      
    const pxq = (a,b) => {
        return a*b
    }

    let total = 0;

    const totalPxQ = (a, b) => {
        let sum = a*b;
        total = total + sum;
        return total
    }
  
    total = cart.map((item=> (totalPxQ(item.cantidad,item.item.price))))

    //Variable verdadera cuando el carrito está vacío o falsa cuando tiene algun producto dentro
    let cartMessage = true;
    if(cart.length>0){
        cartMessage = false;
    }


    const finishBuy = () => {
        alert(`Gracias por comprar los cursos de Master Techno, en breve recibirás un email con el comprobante`);
    }


    return(
        <section className="cart cartSlide"> 
             <div className="hero-container cartCard">
                 <h1>Cursos Adquiridos</h1>
                {
                cartMessage ? 
                <div className="message">
                    <h2>No has agregado ningún curso al carrito</h2>
                    <button className="custom-btn btn-5"><Link to={'/'} className="link"><span>Agregar Cursos</span></Link></button>
                </div>
                :            
                <div>    
                    <ul className="productCart">
                        {cart.map(item =>
                        <li  key={item.item.id}>
                        Nombre: {item.item.name} <br></br>
                        Cantidad: {item.cantidad}  <br></br> 
                        Precio: $ {item.item.price}  <br></br> 
                        Total: $ {pxq(item.cantidad,item.item.price)} <br></br> 
                        <button onClick={()=>clearItem(item.item.id)}> Eliminar del carrito </button></li>)}
                    </ul>
                    <h3>Total Carrito: $ {total[total.length-1]} </h3>
                    <button className="custom-btn btn-5" onClick={()=>clearCart()}><span>Resetear Carrito</span></button>
                    <button className="custom-btn btn-5" onClick={()=>finishBuy()}><span>Finalizar Compra</span></button>
                </div> 
                }
            </div>
        </section>
    )
}

export default Cart