import React, { useEffect, useParams, useState} from 'react';
import './ItemListContainer.css'
import ItemList from './ItemList'
import { getFirestore } from '../../services/getFirebase';


const ItemListContainer = () => {
const[items, setItems] = useState([]);
const {category } = useParams()

useEffect(() =>{
    const db = getFirestore();
    // decidir que coleccion quiero traer de firebase
    db.collection('Items').get()//toda la coleccion
    .then(resp => setItems(resp.docs.map(it => ({id: it.id, ...it.data() }))))//capturar la promesa

    // db.collection('Items').doc('TxUPSN56lp6OuPyOIPYN').get()//traer uno
    // .then(resp => setItem({id: resp.id, ...resp.data() } ) )
  }, [category])

  console.log(items);

console.log(items)

    return(
        <section className="cursos cursosSlide">
            <ItemList />
         </section>
    );
}

export default ItemListContainer