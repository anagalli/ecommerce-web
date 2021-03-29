import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import '../../assets/css/ItemDetailContainer.css';
import ItemDetail from './ItemDetail';
import ItemListContainer from '../Home/ItemListContainer';
import stock from '../../stock.json';

const ItemDetailContainer = () =>  {

    let {id} = useParams()

    const [item, setItem] = useState([]);

    useEffect(() => {
        getItem()
        .then((result) => {
            let filter = id ? result.filter((el) => el.id === parseInt(id)) : result
            setItem(filter)
        })
    }, [id]);

    const getItem = () => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(stock)
        }, 500);
      })
    }

    return (
    <div className="detail-products">
        {
          item.length > 0 ? <ItemDetail item={item[0]} /> : <ItemListContainer />
        }
    </div>
    )
}

export default ItemDetailContainer;