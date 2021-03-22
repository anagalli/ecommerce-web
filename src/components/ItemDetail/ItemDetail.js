import React, { useState } from 'react';
import ItemCount from './ItemCount';
import '../../assets/css/ItemDetail.css';

const ItemDetail = (props) => {

    const [stockActual, setStockActual] = useState(10);

    const restartStock = (e, nuevoStock) => {
        e.preventDefault();
        setStockActual((stockActual) => stockActual - nuevoStock);
    }

    return(
        <div className="container-detail">
            <div className="div-img-detail">
                <img className="img-detail" src={props.item.url} alt={props.item.title} />
            </div>
            <div className="text-detail">
                <h2 className="title-detail">{props.item.title}</h2>
                <span className="category-detail">{props.item.category}</span>
                <ul className="description-detail">
                    <li className="li-detail"><span className="span-li-detail">Marca:</span> {props.item.marca}</li>
                    <li className="li-detail"><span className="span-li-detail">Modelo:</span> {props.item.modelo}</li>
                    <li className="li-detail"><span className="span-li-detail">Procesador:</span> {props.item.procesador}</li>
                    <li className="li-detail"><span className="span-li-detail">Disco:</span> {props.item.disco}</li>
                    <li className="li-detail"><span className="span-li-detail">Memoria:</span> {props.item.memoria}</li>
                    <li className="li-detail"><span className="span-li-detail">Pantalla:</span> {props.item.pantalla}</li>
                    <li className="li-detail"><span className="span-li-detail">Video:</span> {props.item.video}</li>
                    <li className="li-detail"><span className="span-li-detail">Sistema Operativo:</span> {props.item.sistema}</li>
                </ul>
                <ItemCount stock={stockActual} initial={1} onAdd={restartStock}/>
            </div>
        </div>
    )
}

export default ItemDetail;