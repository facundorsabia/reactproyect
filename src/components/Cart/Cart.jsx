import './Cart.css';
import { useCartContext } from '../../Context/cartContext';


const Cart = () => {

    const {cartList, clear} = useCartContext();

    return(
        <section className="cart cartSlide"> 
             <div className="hero-container">
                 <h1>Cursos Adquiridos</h1>
                 <ul className="productCart">
                {cartList.map(item =><li  key={item.item.id}>{item.item.name}</li>)}
                </ul>
                <button className="custom-btn btn-5" onClick={()=>clear()}><span>Resetear Carrito</span></button>
            </div>
        </section>
    )
}

export default Cart