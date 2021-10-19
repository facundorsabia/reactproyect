import React from 'react';
import { useEffect, useState } from 'react';
import { getProductById } from '../../helpers/getData.js';
import ItemDetail from '../ItemDetail/ItemDetail.jsx';
import './ItemDetailContainer.css';


const ItemDetailContainer = ({ id }) => {

  const [product, setProduct] = useState(null);


  useEffect(() => {
    getProductById(parseInt(id), setProduct);
    console.log(product);
  }, [id]);

  return (
    <section className="itemContainer itemContainerSlide">
      {product ? <ItemDetail item={product} /> : <p>Obteniendo producto...</p>}
    </section>
  );
};

export default ItemDetailContainer;