import '../../assets/css/Item.css';
import {Link} from 'react-router-dom';

const Item = (props) => {

    return(

        <div className="product-card">
            <Link to={`/product/${props.item.id}`} className="link-product">
                <div className="div-img-product">
                    <img className="img-product" src={props.item.url} alt={props.item.title}/>
                </div>
                <span className="category-product">{props.item.category}</span>
                <p className="title-product">{props.item.title}</p>
                <p className="price-product">${props.item.price}</p>
            </Link>
        </div>

    )

}

export default Item;