import React from 'react';
import './ItemListContainer.css'
import ItemList from './ItemList'


const itemListContainer = () => {

    return(
        <section className="cursos cursosSlide">
            <ItemList />
         </section>
    );
}

export default itemListContainer