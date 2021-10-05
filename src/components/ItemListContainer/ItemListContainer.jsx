import React from 'react';
import Item from '../Item/Item';
import './ItemListContainer.css'


const itemListContainer = ({tittle}) => {
    const urlImage =
    'https://www.blackstaramps.com/img/ranges/live-logic/ableton-live-lite-preview-1.jpg';

    const urlImage2 =
    'https://img.kytary.com/eshop_es/velky_v2/na/637072679851970000/bf33f86f/64695059/ableton-live-10-suite.jpg';

    return(
        <section>
         <h1>{tittle}</h1>
            <div class="itemContainer">
                <Item image={urlImage} name={'Producción Musical Inicial Ableton'} price={5000} stock={30} />
            </div>
            <div class="itemContainer">
                <Item image={urlImage2} name={'Mezcla y Masterización'} price={5000} stock={30} />
            </div>
         </section>
    );
}

export default itemListContainer