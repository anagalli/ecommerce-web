import { getFirestore } from "../../configs/firebase";
import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom';
import Item from './Item';
import '../../assets/css/ItemList.css';

const ItemList = () => {

    const [items, setItems] = useState([]);
    let {categoryId} = useParams();

    useEffect(() => {
        let mounted = true;
        const db = getFirestore();
        const products = db.collection("products");
        products
        .get()
        .then((resp) => {
            if (mounted) {
                if (resp.size === 0) {
                    console.log("Sin datos");
                }
                let allProducts = resp.docs.map( el => {
                    return {id: el.id, ...el.data()}
                });
                if (categoryId) {
                    let filter = allProducts.filter( el => el.category === categoryId);
                    setItems(filter);
                } else {
                    setItems(allProducts);
                }
            }
        }).catch((error) => console.log(error))
        return () => mounted = false;
    }, [categoryId]);

    return (
        <div className="products-div">
            {
                categoryId ?
                <h1 className="title-section">{categoryId}</h1>
                :
                <h1 className="title-section">Productos</h1>
            }
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