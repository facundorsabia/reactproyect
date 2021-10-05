import React from 'react';
import ItemCount from './ItemCount.jsx';

import './Item.css';

const Item = ({ name, image, price, stock }) => {

  const onAdd = (qty) => {
    alert(`Felicitaciones has comprado ${qty} cursos de ${name}`);
  };

  return (
    <article className="product-card">
      <img className="product-card__image" src={image} alt="" />

      <h3 className="product-card__name">{name}</h3>
      <span className="product-card__name">${price}</span>

      <ItemCount stock={stock} onAdd={onAdd} initial={1} />
    </article>
  );
};

export default Item;
