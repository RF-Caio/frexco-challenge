import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Produtos from './pages/Produtos'
import Carrinho from './pages/Carrinho'
import Header from './components/header/Header';

// import api from './services/api'

function App() {

  const [cart, setCart] = useState([]);

  function updateCart(childcart){
    setCart(childcart);
    console.log(cart);
  }
  
  return (
    <div className="App">
        <Routes>
          <Route exact path="/" element={<Produtos cart={cart} setCart={updateCart}/>}/>
          <Route path="/carrinho" element={<Carrinho cart={cart} setCart={updateCart}/>}/>
        </Routes>
    </div>
  );
}

export default App;
