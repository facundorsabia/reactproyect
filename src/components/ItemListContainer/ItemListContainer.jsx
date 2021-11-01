import React, { useEffect, useParams, useState} from 'react';
import './ItemListContainer.css'
import ItemList from './ItemList'
import { getFirestore } from '../../services/getFirebase';


const ItemListContainer = () => {
const[items, setItems] = useState([]);
const {category } = useParams()

useEffect(() => {
        const db = getFirestore();
        db.collection('cursos').get() //toda la coleccion
        .then (resp => setItems(resp.docs.map(it =>({id:it.id,...it.data()}) )))
 //       db.collection('cursos').doc('eEqv8rkdlGfu6JPN7Nhu').get() //toda la coleccion
 //       .then (resp => console.log(resp))
}, [category]);

console.log(items)

    return(
        <section className="cursos cursosSlide">
            <ItemList />
         </section>
    );
}

export default ItemListContainer