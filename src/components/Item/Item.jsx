import React from 'react';
import Button from 'react-bootstrap/Button';
import {NavLink} from 'react-router-dom';
import './Item.css';

const Item = ({name, thumbnail, price, id, category}) => {


  return (
    <article className="product-card">
      <img className="product-card__image" src={thumbnail} alt="cursos de produccion musical" />
      <h3 className="product-card__name">{name}</h3>
      <span className="product-card__name">Categoria: {category}</span> <br></br>
      <span className="product-card__name">${price}</span>
      <Button variant="dark"><NavLink to={`/cursos/${id}`} className="link">+ INFO</NavLink></Button>{' '}
    </article>
  );
};

export default Item;
