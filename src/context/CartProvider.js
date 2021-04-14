import { useState } from 'react';
import CartContext from './CartContext';

const CartProvider = ({ defaultValue = [], children }) => {

    const [cart, setCart] = useState(defaultValue);

    const addItem = ( product, amount) => {
        let productIndex = isInCart(product.id);
        if ( productIndex >= 0) {
            cart[productIndex] = { product, amount: cart[productIndex].amount + amount };
            setCart(cart);
        } else {
            setCart([
                ...cart,
                { product, amount }
            ]);
        }
    };

    const isInCart = (id) => {
        let response = -1;
        if (cart.length !== 0) {
            for (let i = 0; i < cart.length; i++) {
                if (cart[i].product.id === id) {
                    response = i;
                }
            }
        }
        return response;
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
        <CartContext.Provider value={{ cart, addItem, clear, totalPrice, removeItem }}>
            { children }
        </CartContext.Provider>
    );

}

export default CartProvider;