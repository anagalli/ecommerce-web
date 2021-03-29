import { useState } from 'react';
import '../../assets/css/ItemCount.css';

const ItemCount = ({stock, initial, onAdd}) => {

    const [counter, setCounter] = useState(initial);

    const addProduct = (e) => {
        e.preventDefault();
        onAdd(counter);
        setCounter(initial);
    }

    const addCounter = (e) => {
        e.preventDefault();
        setCounter(counter < stock ? counter + 1 : counter);
    }

    const restCounter = (e) => {
        e.preventDefault();
        setCounter(counter > initial ? counter - 1 : counter);
    }

    return (
        <div className="div-buybutton">
            <form className="form-buy">
                {
                    stock
                    ?
                    <div className="div-buttons">
                        <button className="button-rest" onClick={(e) => restCounter(e)}>-</button>
                        <label className="label-counter">{counter}</label>
                        <button className="button-add" onClick={(e) => addCounter(e)}>+</button>
                    </div>
                    :
                    <label className="label-nostock">No hay stock</label>
                }
                <button className="button-buy" onClick={(e) => addProduct(e)}>Añadir al carrito</button>
            </form>
            <span className="span-stock">Stock: {stock}</span>
        </div>
    );

};

export default ItemCount;