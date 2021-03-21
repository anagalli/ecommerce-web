import React, { useEffect, useState } from 'react';
import './assets/css/App.css';
import Header from './components/Header';
import Banner from './components/Banner';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
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
