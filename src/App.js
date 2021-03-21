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
    <BrowserRouter>
      <Header />
      <Banner />
      <Switch>
        <Route exact path="/">
          <ItemListContainer items={items} greeting="Productos"/>
        </Route>
        <Route path="/products">
          <ItemDetailContainer items={items} />
        </Route>
      </Switch>
    </BrowserRouter>
  );

}

export default App;
