import { TiShoppingCart} from 'react-icons/ti';
import './CartWidget.css'


const CartWidget = () => {
    return(
        <div className="cart-widget">
            <TiShoppingCart size={30} color="white"/>
            <div className="qty-display">0</div>
        </div>
    );
}

export default CartWidget