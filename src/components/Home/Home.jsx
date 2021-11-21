import React from 'react';
import {Link} from 'react-router-dom';
import ItemList from '../ItemListContainer/ItemList';
import './Home.css'


const Home = ({title}) => {
    return (
        <section className="hero hero-slide-1">

          <article className="hero-container__text-box">
            <h1>{title}</h1>
            <p>
            Aprende a producir música desde cero. Vas a poder crear tus propias canciones, mezclarlas, masterizarlas y editarlas.
            </p>
            <button className="custom-btn btn-5"><Link to={'/categorias/produccion'} className="link"><span>Produccion Musical</span></Link></button>
            <button className="custom-btn btn-5"><Link to={'/categorias/mezcla'} className="link"><span>Mezcla y Master</span></Link></button>
          </article>

        <ItemList/>
      </section>

    );
  }
  
  export default Home;
  