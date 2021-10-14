import React from 'react';
import ItemCount from '../Item/ItemCount';


import './ItemDetail.css';

const ItemDetail = ({ item }) => {


  const onAdd = (qty) => {
    alert(`Felicitaciones has comprado ${qty} cursos de ${item.name}`);
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
        <ItemCount stock={item.stock} onAdd={onAdd} initial={1} />
      </div>
    </article>
  );
};

export default ItemDetail;
