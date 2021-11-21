import React from 'react';
import './ItemListContainer.css'
import ItemList from './ItemList'


const ItemListContainer = () => {

    return(
        <section className="cursos cursosSlide">
            <h1>Cursos Disponibles</h1>
            <ItemList />
        </section>
    );
}

export default ItemListContainer