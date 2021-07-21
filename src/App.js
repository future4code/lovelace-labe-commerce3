import React from 'react';
import Filtros from './Components/Filtros'
import Produtos from './Components/Produtos/Produtos'
import Carrinho from './Components/Carrinho/Carrinho'

import './App.css';







function App() {
  return (
    <div>
      <Filtros />
      <Produtos />
      <Carrinho />
    </div>
  );
}

export default App;
