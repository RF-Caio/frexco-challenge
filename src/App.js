import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Produtos from './pages/Produtos'
import Carrinho from './pages/Carrinho'

function App() {

  // Ideias que não tive tempo de (ou conhecimento para) implementar
  // 1. Filtros de pesquisa (texto e radio buttons)
  // 2. Carrossel com notícias e sugestões de dietas (outra API?)
  // 3. Autofill de carrinho por definição de valores nutricionais desejados (Machine Learning?)

  const [cart, setCart] = useState([]);

  function updateCart(childcart){
    setCart(childcart);
    // console.log(cart);
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
