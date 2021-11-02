import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';
import './ItemList.css';
import { getFirestore } from '../../services/getFirebase';
import { useParams } from 'react-router';



const ItemList = () => {

  const [products, setProducts] = useState([]);


  useEffect(() => {
    const db = getFirestore();
    db.collection('cursos').get()
    .then(resp => setProducts(resp.docs.map(it => ({id: it.id, ...it.data() }))))
  }, []);

  let {categorias} = useParams();

  
  const showItems = async () => {
    const db = getFirestore();
    if (categorias) {
      try {
        const res = await db.collection('cursos').where('category', '==', categorias).get();
        setProducts(res.docs.map(item => ({id: item.id, ...item.data()})));
      } catch (error) {
        console.log(error);
      }  
    } else {
      try {
        const res = await db.collection('cursos').orderBy('category', 'desc').get();
        setProducts(res.docs.map(item => ({id: item.id, ...item.data()})));
      } catch (error) {
        console.log(error);
      }  
    }
    setTimeout(2000)
  }

  useEffect(()=>{
    showItems();
  }, [categorias]);

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
                      category={product.category}
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
