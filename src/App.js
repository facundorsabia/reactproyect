import './App.css'
import Navbar from './components/Navbar/Navbar'
import 'bootstrap/dist/css/bootstrap.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'


function App() {
  return (
    <div className="App wrapper">
      <div className="wrapper">
      <Navbar />
      <ItemListContainer tittle={'Cursos de producción musical'} />
      <ItemDetailContainer id={1} />
      </div>
    </div>
  );
}

export default App;
