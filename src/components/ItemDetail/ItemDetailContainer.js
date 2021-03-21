import '../../assets/css/ItemDetailContainer.css';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = (props) => (

    <div className="detail-products">
        {
            props.items.map( (el, index) => <ItemDetail key={index} item={el} /> )
        }
    </div>

)

export default ItemDetailContainer;