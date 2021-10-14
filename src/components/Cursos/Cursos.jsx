import React from 'react';
import { useParams } from 'react-router-dom';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';


const Cursos = () => {
  let { id } = useParams();

  return (
    <main>
      <ItemDetailContainer id={id} />
    </main>
  );
};

export default Cursos;
