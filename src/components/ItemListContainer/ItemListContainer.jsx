import React, { useEffect} from 'react';
import './ItemListContainer.css'
import ItemList from './ItemList'
import { getFirestore } from '../../services/getFirebase';


const ItemListContainer = () => {

//    useEffect(() => {
//        db.collection('cursos').get() //toda la coleccion
//        .then (resp => console.log(resp))
 //       db.collection('cursos').doc('eEqv8rkdlGfu6JPN7Nhu').get() //toda la coleccion
 //       .then (resp => console.log(resp))
 //   }, []);

const db = getFirestore();
console.log("test");

    return(
        <section className="cursos cursosSlide">
            <ItemList />
         </section>
    );
}

export default ItemListContainer