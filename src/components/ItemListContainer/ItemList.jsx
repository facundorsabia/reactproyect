import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';
import { getAllProductsFromDB } from '../../helpers/getData';
import './ItemList.css';
import { getFirestore } from '../../services/getFirebase';



const ItemList = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    db.collection('cursos').get()
    .then(resp => setProducts(resp.docs.map(it => ({id: it.id, ...it.data() }))))
  }, []);

  return (
    <div className="product-list-container">
      {
      
        products.length ? ( //si en products no hay nada, el valor será "0" y en ese caso, un cero se puede interpretar como un valor booleano por lo cual se considerará como falso
          <>
            {
              //Luego de dos segundos, products tendrá los productos dentro, y por lo tanto el products.length será distinto de "0", así que se puede interpretar como un valor booleano "true"
              products.map((product) => {

                return (
                  <div key={product.id}>
                    <Item
                      name={product.name}
                      thumbnail={product.thumbnail}
                      price={product.price}
                      stock={product.stock}
                      id={product.id}
                    />
                  </div>
                );
              })
            }
          </>
        ) : (
          <p className="loading">LOADING</p>
        ) //Si products.length es "0" se interpreta como falso y por lo tanto se imprimirá "cargando productos"
      }
    </div>
  );
};

export default ItemList;
