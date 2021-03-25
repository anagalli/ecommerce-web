import '../../assets/css/CartWidget.css';
import cart from '../../assets/images/cart-black.png';

function CartWidget() {
    return(
        <div className="cart-container">
            <img className="cart-img" src={cart} alt="cart" />
        </div>
    );
}

export default CartWidget;