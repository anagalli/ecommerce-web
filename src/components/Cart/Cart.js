import {useContext} from 'react';
import CartContext from '../../context/CartContext';
import '../../assets/css/Cart.css';
import imgEmptyCart from '../../assets/images/empty-cart-img.png'

function Cart() {

    const { cart } = useContext(CartContext);

    return(
        <div className="container-cart">
            {
                cart.length === 0
                ?
                <div className="div-empty-cart">
                    <img className="img-empty-cart" src={imgEmptyCart} alt="Empty Cart"/>
                </div>
                :
                <div className="container-list-cart">
                </div>
            }
        </div>
    );
}

export default Cart;