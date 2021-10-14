import React from 'react';
import {Link} from 'react-router-dom';
import './Home.css'
import Button from 'react-bootstrap/Button'

const Home = ({title}) => {
    return (
        <section className="hero hero-slide-1">
        <div className="hero-container">
          <article className="hero-container__text-box">
            <h1>{title}</h1>
            <p>
            Aprende a producir música desde cero. Vas a poder crear tus propias canciones, mezclarlas, masterizarlas y editarlas.
            </p>
            <Button variant="dark"><Link to={'/cursos'} className="link">+ INFO</Link></Button>{' '}
          </article>
        </div>
      </section>

    );
  }
  
  export default Home;
  