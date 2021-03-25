import { useState } from 'react';
import '../../assets/css/ItemCount.css'

const ItemCount = ({stock, initial, onAdd}) => {

    const [counter, setCounter] = useState(initial);

    const addProduct = () => {
        onAdd(counter);
        setCounter(initial);
    }

    return (
        <div className="div-buybutton">
            <form className="form-buy">
                {
                    stock
                    ?
                    <div className="div-buttons">
                        <button className="button-add" onClick={ (e) => {
                            e.preventDefault();
                            setCounter(counter < stock ? counter + 1 : counter)}}>+</button>
                        <label className="label-counter">{counter}</label>
                        <button className="button-rest" onClick={ (e) => {
                            e.preventDefault();
                            setCounter(counter > initial ? counter - 1 : counter) }}>-</button>
                    </div>
                    :
                    <label className="label-nostock">No hay stock</label>
                }
                <button className="button-buy" disabled={!stock} onClick={(e) => {e.preventDefault(); addProduct()}}>Añadir al carrito</button>
            </form>
            <span className="span-stock">Stock: {stock}</span>
        </div>
    );

};

export default ItemCount;