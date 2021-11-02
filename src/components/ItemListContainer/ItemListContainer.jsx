import React, { useEffect, useParams, useState} from 'react';
import './ItemListContainer.css'
import ItemList from './ItemList'


const ItemListContainer = () => {

    return(
        <section className="cursos cursosSlide">
            <ItemList />
         </section>
    );
}

export default ItemListContainer