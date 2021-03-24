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
                <span className="span-stock">Stock: {stock}</span>
                {
                    stock
                    ?
                    <div>
                        <button onClick={ (e) => {
                            e.preventDefault();
                            setCounter(counter < stock ? counter + 1 : counter)}}>+</button>
                        <label>{counter}</label>
                        <button onClick={ (e) => {
                            e.preventDefault();
                            setCounter(counter > initial ? counter - 1 : counter) }}>-</button>
                    </div>
                    :
                    <label>No hay stock</label>
                }
                <button disabled={!stock} onClick={(e) => {e.preventDefault(); addProduct()}}>Añadir al carrito</button>
            </form>
        </div>
    );

};

export default ItemCount;