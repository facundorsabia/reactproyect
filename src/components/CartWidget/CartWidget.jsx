import { TiShoppingCart} from 'react-icons/ti';
import './CartWidget.css'
import { useCartContext } from '../../Context/cartContext';

const CartWidget = () => {

    const {cartList, clear} = useCartContext();
    var totalItems = (cartList.length);

    
    return(
        <div className="cart-widget">
            <TiShoppingCart size={30} color="white"/>
            <div className="qty-display">{totalItems}</div>
        </div>
    );
}

export default CartWidget