import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './assets/css/App.css';
import Header from './components/Header/Header';
import Banner from './components/Header/Banner';
import ItemListContainer from './components/Item/ItemListContainer';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';
import CartProvider from './context/CartProvider';
import Cart from './components/Cart/Cart';
import Checkout from './components/Cart/Checkout';

function App() {

  return (
    <CartProvider>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/product/:id">
            <ItemDetailContainer />
          </Route>
          <Route path="/category/:categoryId">
            <Banner />
            <ItemListContainer />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route exact path="/">
            <Banner />
            <ItemListContainer />
          </Route>
        </Switch>
      </BrowserRouter>
    </CartProvider>
  );

}

export default App;
