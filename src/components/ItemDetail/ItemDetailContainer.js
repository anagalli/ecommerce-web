import React, { useEffect, useState } from 'react';
import '../../assets/css/ItemDetailContainer.css';
import ItemDetail from './ItemDetail';
import ItemListContainer from '../Home/ItemListContainer';
import stock from '../../stock.json';

const ItemDetailContainer = (props) =>  {

    let id = parseInt(props.id);

    const [item, setItem] = useState([]);

    useEffect( () => {
      new Promise( (resolve, reject) => {
        setTimeout( () => {
          resolve(stock);
        }, 500);
      }).then( (resultado) => {
          let filterProducts = id ? resultado.filter((el) => el.id === id ) : resultado
          setItem(filterProducts[0])
      })
    },[id]);

    const stockItem = item.stock;

    return (
    <div className="detail-products">
        {
          id <= stock.length ? <ItemDetail item={item} stockItem={stockItem} /> : <ItemListContainer items={props.items} />
        }
    </div>
    )
}

export default ItemDetailContainer;