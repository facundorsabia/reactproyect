import './Cart.css';
import React from 'react';
import { useCartContext } from '../../Context/cartContext';
import {Link} from 'react-router-dom';
import firebase from 'firebase';
import { getFirestore } from '../../services/getFirebase';

const Cart = () => {


    const {cart, clearCart, clearItem, totalPxQ} = useCartContext();

      
    const pxq = (a,b) => {
        return a*b
    }

    const finishBuy = () => {
        let order = {};
        order.date = firebase.firestore.Timestamp.fromDate(new Date());
        order.buyer = {name: 'Facundo Rodriguez', email:'palufarosa@hotmailcom.ar', phone: 1567431598, payment:'card'};
        order.total = totalPxQ();
        order.items = cart.map(cartItem => {
          const id = cartItem.item.id;
          const item = cartItem.item.name;
          const price = pxq(cartItem.item.price, cartItem.cantidad);
          const quant = cartItem.cantidad;
    
          return {id, item, price, quant}
        })
  
        const dbOrder = getFirestore();
    
        const orderReady = dbOrder.collection('orders')
        orderReady.add(order)
        .then((IdDocumento)=>{
          setTimeout(alert(`Su número de orden es ${IdDocumento.id} y esta siendo procesada`), 3000)
        })
        .catch(error => {
          console.log(error)
        })
        .finally(()=>{
          alert(`Su compra se ha realizado con éxito, en breve recibirá una confirmación y recibo por email.`)
        })
        

       clearCart();

       
    const updateItems = dbOrder.collection('cursos').where(firebase.firestore.FieldPath.documentId(), 'in', cart.map(i => i.item.id));

    const batch = dbOrder.batch();

    updateItems.get()
    .then(collection => {
      collection.docs.forEach(docSnapshot => {
        batch.update(docSnapshot.ref, {
          stock: docSnapshot.data().stock - cart.find(it => it.item.id === docSnapshot.id).cantidad
        })
      })
      batch.commit().then(resp => {
        console.log('modificado');
      })
      .catch(er => {
        console.log(er);
      })
    })
  }


    //Variable verdadera cuando el carrito está vacío o falsa cuando tiene algun producto dentro
    let cartMessage = true;
    if(cart.length>0){
        cartMessage = false;
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
                    <h3>Total Carrito: $ {totalPxQ()} </h3>
                    <button className="custom-btn btn-5" onClick={()=>clearCart()}><span>Resetear Carrito</span></button>
                    <button className="custom-btn btn-5" onClick={()=>finishBuy()}><span>Finalizar Compra</span></button>
                </div> 
                }
            </div>
        </section>
    )
}

export default Cart