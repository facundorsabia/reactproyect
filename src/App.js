import './App.css'
import Navbar from './components/Navbar/Navbar'
import 'bootstrap/dist/css/bootstrap.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';


function App() {
  return (
    <div className="App wrapper">
      <div className="wrapper">
      <Navbar />
      <ItemListContainer tittle={'Cursos de producción musical'} />
      </div>
    </div>
  );
}

export default App;
