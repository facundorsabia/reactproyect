import React, {useState} from 'react';
import ItemCount from '../Item/ItemCount';
import {Link} from 'react-router-dom';
import './ItemDetail.css';
import { useCartContext } from '../../Context/cartContext';
import Swal from 'sweetalert2';

const ItemDetail = ({ item }) => {

  const {cart, addItem, addCart} = useCartContext();
 

  const onAdd = (qty) => {
    if (cart.length === 0) {
    addItem({item: item, cantidad: qty});
    addCart(qty);
    Swal.fire({
      icon: 'info',
      title: `Has agregado al carrito ${qty} cursos de ${item.name}`,
      showConfirmButton: false,
      timer: 3000
    })
    setShow(true);
    setHide(false);
    } else  {
      let idDouble = cart.find(item => item.item.id === item.id)
      if (idDouble) {
        Swal.fire({
          icon: 'info',
          title: `Has agregado al carrito ${qty} cursos de ${item.name}`,
          showConfirmButton: false,
          timer: 3000
        })
        addCart(qty);
        idDouble.cantidad = idDouble.cantidad+qty;
        setShow(true);
        setHide(false);
      } else {
        Swal.fire({
          icon: 'info',
          title: `Has agregado al carrito ${qty} cursos de ${item.name}`,
          showConfirmButton: false,
          timer: 3000
        })
        addCart(qty);
        setShow(true);
        setHide(false);
        addItem({item: item, cantidad: qty})
      }
    }
  };

    //mostrar y ocultar botones
    const [show, setShow] = useState (false);

    const [hide, setHide] = useState (true);

  return (
      <article className="product-detail">
        <img src={item.thumbnail} alt="" className="product-detail__img" />
        <div className="product-detail__info">
          <h2 className="name">{item.name}</h2>
          <p className="description">{item.description}</p>
          <p className="description">categoría: {item.category}</p>
          <ul className="info-grid">
            <li>Precio:${item.price}</li>
            <li>Herramientas tecnológicas: {item.tools}</li>
          </ul>

          {
          hide ? <ItemCount stock={item.stock} onAdd={onAdd} initial={1}/>:null
          }
          {
          show ? <button className="custom-btn btn-5"><Link to={'/'} className="link"><span>Seguir Comprando</span></Link></button>:null
          }
          {
          show ? <button className="custom-btn btn-5"><Link to={'/cart'} className="link"><span>Finalizar Compra</span></Link></button>:null
          }
          </div>
      </article>
  );
};

export default ItemDetail;
