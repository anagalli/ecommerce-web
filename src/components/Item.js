import '../assets/css/Item.css';

const Item = (props) => 

    <div className="product-card">
        <a href="#product" className="link-product">
            <img className="img-product" src={props.item.url} alt={props.item.title}/>
            <span className="category-product">{props.item.category}</span>
            <p className="title-product">{props.item.title}</p>
            <p className="price-product">${props.item.price}</p>
        </a>
    </div>

export default Item;