import { TiShoppingCart} from 'react-icons/ti';
import './CartWidget.css'
import { useCartContext } from '../../Context/cartContext';

const CartWidget = () => {

    const {qBuy} = useCartContext();
    
    return(
        <div className="cart-widget">
            <TiShoppingCart size={30} color="white"/>
            <div className="qty-display">{qBuy}</div>
        </div>
    );
}

export default CartWidget