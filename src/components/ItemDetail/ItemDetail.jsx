import React, {useState} from 'react';
import ItemCount from '../Item/ItemCount';
import {Link} from 'react-router-dom';
import './ItemDetail.css';
import { useCartContext } from '../../Context/cartContext';


const ItemDetail = ({ item }) => {

  const {cartList, addItem} = useCartContext();
  console.log(cartList);

  const [show, setShow] = useState (false);

  const [hide, setHide] = useState (true);

  const onAdd = (qty) => {
    addItem({item: item, cantidad: qty});
    alert(`Has agreegado al carrito ${qty} cursos de ${item.name}`);
    setShow(true);
    setHide(false);
  };

  return (
      <article className="product-detail">
        <img src={item.thumbnail} alt="" className="product-detail__img" />
        <div className="product-detail__info">
          <h2 className="name">{item.name}</h2>
          <p className="description">{item.description}</p>
          <ul className="info-grid">
            <li>Precio:${item.price}</li>
            <li>Herramientas tecnológicas: {item.tools}</li>
          </ul>
          {
          hide ? <ItemCount stock={item.stock} onAdd={onAdd} initial={1}/>:null
          }
          
          {
          show ? <button className="custom-btn btn-5"><Link to={'/cart'} className="link"><span>Finalizar Compra</span></Link></button>:null
          }
          </div>
      </article>
  );
};

export default ItemDetail;
