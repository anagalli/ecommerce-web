import '../../assets/css/CartWidget.css';
import {useContext} from 'react';
import CartContext from '../../context/CartContext';
import Cart from '../../assets/images/cart-black.png';
import {Link} from 'react-router-dom';

function CartWidget() {

    const { cart } = useContext(CartContext);

    return(
        <div className="cart-container">
            <Link to={`/cart`}>
                <img className="cart-img" src={Cart} alt="cart" /></Link>
            {
                cart.length === 0
                ?
                <span className="span-cart" hidden></span>
                :
                <span className="span-cart">{cart.length}</span>
            }
        </div>
    );
}

export default CartWidget;