import {useContext} from 'react';
import CartContext from '../../context/CartContext';
import { Link } from 'react-router-dom';
import '../../assets/css/Cart.css';
import imgEmptyCart from '../../assets/images/cartEmpty.png'

function Cart() {

    const context  = useContext(CartContext);

    return(
        <div className="container-cart">
            {
                context.cart.length === 0
                ?
                <div className="container-empty-cart">
                    <img className="img-empty-cart" src={imgEmptyCart} alt="Empty Cart"/>
                </div>
                :
                <div className="container-cart">
                    <div className="container-back">
                        <Link to="/" className="link-back">Volver</Link>
                    </div>
                    <div className="container-product-cart">
                    {
                        context.cart.map( (el, index) => {
                            return(
                                <div key={index} className="product-cart">
                                    <div className="container-img-text">
                                        <img className="img-product-cart" src={el.product.img} alt="img" />
                                        <div className="text-product-cart">
                                            <p className="title-product-cart">{el.product.title}</p>
                                            <p className="quantity-product-cart">Cantidad: {el.amount}</p>
                                            <p className="price-product-cart">Precio: ${el.product.price * el.amount}</p>
                                        </div>
                                    </div>
                                    <div className="div-remove-cart">
                                        <span onClick={ () => { context.removeItem(el.product.id)} } className="span-remove-cart">X</span>
                                    </div>
                                </div>
                            );
                        })
                    }
                    </div>
                    <div className="container-price-clear">
                        <p className="total-price-cart">Precio total: ${context.totalPrice()}</p>
                        <div className="container-clear-cart">
                            <button onClick={() => { context.clear() } } className="button-clear-cart">Vaciar</button>
                            <Link to="/checkout" className="finish-cart-link">Finalizar</Link>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
}

export default Cart;
