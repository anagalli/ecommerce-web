import React, {Component} from "react";
import '../assets/css/ItemListContainer.css';
import ItemList from './ItemList';

class ItemListContainer extends Component {
  render() {
    return (
      <div className="products-div">
        <h1 className="title-section">{this.props.greeting}</h1>
        <ItemList items={this.props.items} />
      </div>
    );
  }
}

export default ItemListContainer;