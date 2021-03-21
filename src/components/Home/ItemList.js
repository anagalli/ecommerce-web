import Item from './Item';
import '../../assets/css/ItemList.css';

const ItemList = (props) => (
    <>
        <div className="products-container">
            {
                props.items.map( (el, index) => <Item key={index} item={el} /> )
            }
        </div>
    </>
);

export default ItemList;