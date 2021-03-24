import Item from './Item';
import '../../assets/css/ItemList.css';

const ItemList = (props) => {

    let component;

    if (props.category === undefined) {
        component = props.items.map( (el, index) => <Item key={index} item={el} /> )
    } else {
        component = props.items.map( (el, index) =>
                    el.category === props.category &&
                    <Item key={index} item={el} /> )
    }

    return (
        <div className="products-div">
            <h1 className="title-section">Productos</h1>
            <div className="products-container">
                {component}
            </div>
        </div>
    )
};

export default ItemList;