import React, {Component} from "react";
import '../../assets/css/ItemListContainer.css';
import ItemList from './ItemList';

class ItemListContainer extends Component {
  render() {

    return (
      <>
        <ItemList items={this.props.items} category={this.props.category}/>
      </>
    );

  }
}

export default ItemListContainer;