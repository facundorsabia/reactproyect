import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getProductById } from '../../helpers/getData.js';
import ItemDetail from '../ItemDetail/ItemDetail.jsx';
import './ItemDetailContainer.css';
import { getFirestore } from '../../services/getFirebase';

const ItemDetailContainer = ({ addCart }) => {
  const [itemFind, setitemFind] = useState(false);
  
  const [item, setItem] = useState({})
  
  let {id} = useParams();
  
  const db = getFirestore();

  const getItem = async() => {
    try {
      const res = await db.collection('cursos').doc(id).get();
      setItem({id: res.id, ...res.data()});
    } catch (error) {
      console.log(error);
    }  
    setitemFind(true)
  };
  
  useEffect(() => {
    setitemFind(false);
    getItem();
  }, [id])
  
  return (
    <section className="itemContainer itemContainerSlide">
      {itemFind  ? <ItemDetail item={item} addCart={addCart} /> : <p>Obteniendo producto...</p>}
    </section>
  );
};

export default ItemDetailContainer;