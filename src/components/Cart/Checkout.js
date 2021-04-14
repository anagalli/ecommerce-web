import '../../assets/css/Checkout.css';
import { Link } from "react-router-dom";
import {useContext} from 'react';
import CartContext from '../../context/CartContext';
import { useState } from 'react';
import { getFirestore } from '../../configs/firebase';
import firebase from 'firebase/app';
import "firebase/firestore";

const Checkout = () => {

    const {cart, clear, totalPrice} = useContext(CartContext);
    const [db, setDb] = useState(getFirestore());
    const [lastId, setLastId] = useState('');
    const [isLoad, setIsLoad] = useState(true);

    const createNewOrder = (e) => {
        e.preventDefault();
        const newOrder = {
            user: {
                name: document.getElementById('user-name').value,
                number: parseInt(document.getElementById('user-number').value),
                email: document.getElementById('user-email').value},
            products: listProductsCart(),
            total: totalPrice(),
            dateCreate: firebase.firestore.Timestamp.fromDate(new Date())
        }
        const orders = db.collection('orders');
        orders.add(newOrder).then( (resp) => {
            setLastId(resp.id);
            setTimeout(() => {
                setIsLoad(false);
            }, 4000);
        });
        clear();
        document.getElementById('form-checkout').reset();
    }

    const listProductsCart = () => {
        let products = [];
        for (let i = 0; i<cart.length; i++) {
            const product = {
                id: cart[i].product.id,
                title: cart[i].product.title,
                quantity: cart[i].amount,
                price: cart[i].product.price * cart[i].amount
            }
            products.push(product);
        }
        return products;
    }

    const CheckoutOrder = () => {
        return(
            <div className="container-checkout">
                <h1 className="title-checkout">CONFIRMACIÓN</h1>
                <p className="text-checkout">Por favor complete los siguientes datos para finalizar su compra.</p>
                <form id="form-checkout" className="form-checkout">
                    <div className="div-input">
                        <label className="label-input">Nombre y Apellido: </label>
                        <input id="user-name" className="form-input" type="text" required></input>
                    </div>
                    <div className="div-input">
                        <label className="label-input">Teléfono: </label>
                        <input id="user-number" className="form-input" type="tel" required></input>
                    </div>
                    <div className="div-input">
                        <label className="label-input">Correo:</label>
                        <input id="user-email" className="form-input" type="email" required></input>
                    </div>
                    <button onClick={(e) => createNewOrder(e)}className="button-form" type="submit">Confirmar</button>
                </form>
            </div>
        );
    }

    const WaitingMessage = () => {
        return(
            <div className="waiting-div">
                <p>Estamos procesando su compra. Por favor aguarde...</p>
            </div>
        );
    }

    const OrderFinalMessage = () => {
        return(
            <div className="container-order-message">
                <p className="thanks-message">Gracias por su compra!</p>
                <p className="text-order-message">Numero de orden: {lastId}</p>
                <Link to="/" className="link-order-message">Cerrar</Link>
            </div>
        );
    }

    

    return(
        <>
        {
            lastId === '' ?
            <CheckoutOrder />
            :
            isLoad === true ?
            <WaitingMessage />
            :
            <OrderFinalMessage />
        }
        </>
    );
}

export default Checkout;