import Item from './Item';
import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom';
import '../../assets/css/ItemList.css';
import stock from '../../stock.json';

const ItemList = () => {

    const [items, setItems] = useState([]);
    let {categoryId} = useParams();

    useEffect(() => {
        let mounted = true;
        getItems()
        .then((result) => {
            if (mounted) {
                let filter = categoryId ? result.filter((element) => element.category === categoryId) : result
                setItems(filter)
            }
        })
        return () => mounted = false;
    }, [categoryId]);

    const getItems = () => {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve(stock);
          }, 500);
        })
    }

    return (
        <div className="products-div">
            <h1 className="title-section">Productos</h1>
            <div className="products-container">
                {items.map((el) => {
                    return(
                        <Item key={el.id} item={el}/>
                    )
                })}
            </div>
        </div>
    )
};

export default ItemList;