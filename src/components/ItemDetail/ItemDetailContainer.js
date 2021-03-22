import React, { useEffect, useState } from 'react';
import '../../assets/css/ItemDetailContainer.css';
import ItemDetail from './ItemDetail';
import stock from '../../stock.json';

const ItemDetailContainer = (props) =>  {

    const [items, setItems] = useState([]);

    useEffect( () => {
        new Promise( (resolve, reject) => {
        setTimeout( () => {
            resolve(stock);
        }, 1000);
        }).then( (resultado) => setItems(resultado));
    });

    return (
    <div className="detail-products">
        {
            items.map( (el, index) => <ItemDetail key={index} item={el} /> )
        }
    </div>
    )
}

export default ItemDetailContainer;