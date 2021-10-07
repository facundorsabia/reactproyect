import React from 'react';
import './ItemListContainer.css'
import ItemList from './ItemList'


const itemListContainer = ({tittle}) => {

    return(
        <section>
         <h1>{tittle}</h1>
            <ItemList />
         </section>
    );
}

export default itemListContainer