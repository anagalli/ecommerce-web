import React, { useState } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './assets/css/App.css';
import Header from './components/Header/Header';
import Banner from './components/Header/Banner';
import ItemListContainer from './components/Home/ItemListContainer';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';
import CartContext from './context/CartContext';
import Cart from './components/Cart/Cart';

function App() {

  const [cart, setCart] = useState([]);

  return (
    <CartContext.Provider value={{cart, setCart}}>
      <BrowserRouter>
        <Header />
        <Banner />
        <Switch>
          <Route path="/product/:id">
            <ItemDetailContainer />
          </Route>
          <Route path="/category/:categoryId">
            <ItemListContainer />
          </Route>
          <Route exact path="/">
            <ItemListContainer />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
        </Switch>
      </BrowserRouter>
    </CartContext.Provider>
  );

}

export default App;
