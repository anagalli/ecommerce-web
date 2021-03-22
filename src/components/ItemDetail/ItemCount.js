import '../../assets/css/ItemCount.css'

const ItemCount = ({stock, initial, onAdd}) => {

    return (
        <div class="div-buybutton">
            <form class="form-buy">
                <span class="span-stock">Stock: {stock}</span>
                <input class="input-stock" id="cantidad" type="number" min={initial} placeholder={initial} max={stock} ></input>
                <button class="button-buy" onClick={(e) => onAdd(e, 1)}>Añadir al carrito</button>
            </form>
        </div>
    );

};

export default ItemCount;