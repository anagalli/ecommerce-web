import React, { useEffect, useState } from "react";
import { getFirestore } from "../../configs/firebase";
import { useParams } from "react-router-dom";
import "../../assets/css/ItemDetailContainer.css";
import ItemDetail from "./ItemDetail";
import ItemListContainer from "../Item/ItemListContainer";

const ItemDetailContainer = () => {

  let { id } = useParams();

  const [item, setItem] = useState([]);
  const [isLoad, setIsLoad] = useState(true);

  useEffect(() => {
    const db = getFirestore();
    const products = db.collection("products");
    products.doc(id)
    .get()
    .then( (el) => {
      setItem(el.data());
      setIsLoad(false);
    });
  }, [id]);

  return (
    <div className="detail-container">
      {isLoad ?
        <div className="lds-ring">
          <div></div>
          <div></div>
          <div></div>
        </div>
      : item ?
        <ItemDetail item={item} id={id} />
      :
        <ItemListContainer />
      }
    </div>
  );
};

export default ItemDetailContainer;
