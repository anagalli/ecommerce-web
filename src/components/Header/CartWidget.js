import '../../assets/css/CartWidget.css';
import {useContext} from 'react';
import CartContext from '../../context/CartContext';
import Cart from '../../assets/images/black-cart.svg';
import {Link} from 'react-router-dom';

function CartWidget() {

    const {cart} = useContext(CartContext);

    let totalItems = 0;

    for (let i = 0; i<cart.length; i++) {
        totalItems = totalItems + cart[i].amount;
    }

    return(
        <div className="cart-container">
            {
                cart.length !== 0
                &&
                <span className="span-cart">{totalItems}</span>
            }
            <Link to={`/cart`}><img className="cart-icon" src={Cart} alt="Cart"/></Link>
        </div>
    );
}

export default CartWidget;