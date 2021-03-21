import React, { useEffect, useState } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './assets/css/App.css';
import Header from './components/Header/Header';
import Banner from './components/Header/Banner';
import ItemListContainer from './components/Home/ItemListContainer';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';
import stock from './stock.json';

function App() {

  const [items, setItems] = useState([]);

  useEffect( () => {
    new Promise( (resolve, reject) => {
      setTimeout( () => {
        resolve(stock);
      }, 2000);
    }).then( (resultado) => setItems(resultado));
  });

  return (
    <div className="App">
      <Header />
      <Banner />
      <ItemListContainer items={items} greeting="Productos"/>
      <ItemDetailContainer items={items} />
    </div>
  );

}

export default App;
