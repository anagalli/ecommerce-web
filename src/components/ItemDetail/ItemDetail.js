import React, { useState } from 'react';
import { Link } from "react-router-dom";
import ItemCount from './ItemCount';
import '../../assets/css/ItemDetail.css';

const ItemDetail = ({item}) => {

    const [stock, setStock] = useState(item.stock);

    const [finishPurchase, setFinishPurchase] = useState(false);

    const newStock = (amount) => {
        if (amount <= stock) {
            setStock(stock - amount);
            setFinishPurchase(true);
        }
    }

    const ShowCounter = () => {
        if(finishPurchase === true){
            return(
                <>
                    <ItemCount stock={stock} initial={1} onAdd={newStock}/>
                    <Link to="/cart" className="link-finalizar">Finalizar compra</Link>
                </>
            )
        } else {
            return <ItemCount stock={stock} initial={1} onAdd={newStock}/>
        }
    }

    return(
        <div className="container-detail">
            <div className="div-img-detail">
                <img className="img-detail" src={item.url} alt={item.title} />
            </div>
            <div className="text-detail">
                <h2 className="title-detail">{item.title}</h2>
                <span className="category-detail">{item.category}</span>
                <ul className="description-detail">
                    <li className="li-detail"><span className="span-li-detail">Marca:</span>{item.marca}</li>
                    <li className="li-detail"><span className="span-li-detail">Modelo:</span> {item.modelo}</li>
                    <li className="li-detail"><span className="span-li-detail">Procesador:</span> {item.procesador}</li>
                    <li className="li-detail"><span className="span-li-detail">Disco:</span> {item.disco}</li>
                    <li className="li-detail"><span className="span-li-detail">Memoria:</span> {item.memoria}</li>
                    <li className="li-detail"><span className="span-li-detail">Pantalla:</span> {item.pantalla}</li>
                    <li className="li-detail"><span className="span-li-detail">Video:</span> {item.video}</li>
                    <li className="li-detail"><span className="span-li-detail">Sistema Operativo:</span> {item.sistema}</li>
                </ul>
                <p className="price-detail">${item.price}</p>
                <ShowCounter />
            </div>
        </div>
    )
}

export default ItemDetail;


/*<ItemCount stock={stock} initial={1} onAdd={newStock}/>
                <Link to="/cart" className="link-finalizar">Finalizar compra</Link>*/