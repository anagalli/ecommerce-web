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
      <Route exact path="/product/:id" render={(props)=>(
          <ItemDetailContainer items={items} id={props.match.params.id}/>
        )} />
        <Route exact path="/:category" render={(props)=>(
          <ItemListContainer items={items} category={props.match.params.category}/>
        )} />
        <Route exact path="/" render={()=>(
          <ItemListContainer items={items} />
        )} />
      </Switch>
    </BrowserRouter>
  );

}

export default App;
