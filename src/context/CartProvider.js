import { useState } from 'react';
import CartContext from './CartContext';

const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([]);

    const addItem = ( product, amount) => {

        const productIndex = isInCart(product.id);

        if (productIndex >= 0) {
            const newAmount = cart[productIndex].amount + amount;
            const newItem = cart.map(function(el){
                if (el.product.id === product.id) {
                    el = {product, amount: newAmount}
                }
                return el;
            });
            setCart(newItem);
        } else {
            setCart([
                ...cart,
                { product, amount }
            ]);
        }
    };

    const isInCart = (id) => {
        const indexElement = cart.findIndex((el) => el.product.id === id);
        return indexElement;
    }

    const totalPrice = () => {
        let totalPrice = 0;
        for (let i = 0; i < cart.length; i++) {
            let totalProduct = cart[i].product.price * cart[i].amount;
            totalPrice = totalPrice + totalProduct;
        }
        return totalPrice;
    }

    const removeItem = (id) => {
        let newCart = cart.filter(({product}) => product.id !== id )
        setCart(newCart);
    };

    const clear = () => {
        setCart([]);
    };

    return(
        <CartContext.Provider value={{ cart, addItem, clear, totalPrice, removeItem}}>
            { children }
        </CartContext.Provider>
    );

}

export default CartProvider;