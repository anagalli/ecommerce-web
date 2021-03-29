import Item from './Item';
import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom';
import '../../assets/css/ItemList.css';
import stock from '../../stock.json';

const ItemList = (props) => {

    let {categoryId} = useParams();

    const [items, setItems] = useState([]);

    useEffect(() => {
        setItems([])
        getItems()
        .then((result) => {
            let filter = categoryId ? result.filter((element) => element.category === categoryId) : result
            setItems(filter)
        })
    }, [categoryId]);

    const getItems = () => {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve(stock)
          }, 1000);
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