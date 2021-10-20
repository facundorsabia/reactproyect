import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Blog from './components/Blog/Blog';
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact';
import Cursos from './components/Cursos/Cursos';
import CartContextProvider from './Context/cartContext';
import Cart from './components/Cart/Cart';

function App() {

  return (
  <CartContextProvider>
    <BrowserRouter>
        <Navbar/>
          <Switch>
            <Route exact path="/">
              <Home title={'Cursos de producción musical'} />
            </Route>
            <Route exact path="/cursos">
              <ItemListContainer/>
            </Route>
            <Route exact path="/cursos/:id">
              <Cursos/>
            </Route>
            <Route exact path="/blog">
              <Blog/>
            </Route>
            <Route exact path="/contacto">
              <Contact/>
            </Route>
            <Route exact path="/cart">
              <Cart/>
            </Route>
          </Switch>
        <Footer/>
    </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
