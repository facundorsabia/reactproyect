import React from 'react';
import ItemCount from './ItemCount.jsx';
import Button from 'react-bootstrap/Button';
import {NavLink, useParams} from 'react-router-dom';
import './Item.css';

const Item = ({ name, thumbnail, price, id, stock  }) => {


  const onAdd = (qty) => {
    alert(`Felicitaciones has comprado ${qty} cursos de ${name}`);
  };

  return (
    <article className="product-card">
      <img className="product-card__image" src={thumbnail} alt="cursos de produccion musical" />
      <h3 className="product-card__name">{name}</h3>
      <span className="product-card__name">${price}</span>
      <Button variant="dark"><NavLink to={`/cursos/${id}`} className="link">+ INFO</NavLink></Button>{' '}
      <ItemCount stock={stock} onAdd={onAdd} initial={1} />
    </article>
  );
};

export default Item;
