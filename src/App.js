import React from 'react';
// import Filtros from './Components/Filtros'
import Produtos from './Components/Produtos/Produtos'
import Carrinho from './Components/Carrinho/Carrinho'
import {parse, stringify} from 'flatted';
import styled from 'styled-components';
import './App.css';

const ContainerGeral = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr 1fr;
`

class App extends React.Component {
  state = {
    carrinho: [],
    total: 0
  }

  componentDidMount() {
    localStorage.getItem('carrinho') && this.setState({
      carrinho: parse(localStorage.getItem('carrinho'))
    })
  }
  
  componentDidUpdate(prevProps, prevState) {
    if (prevState.carrinho !== this.state.carrinho) {
      this.atualizaTotal()
      localStorage.setItem('carrinho', stringify(this.state.carrinho))
    }
  }

  adicionaAoCarrinho = (camiseta) => {
    const novoItem = { camiseta, id: Date.now() }
    const novoCarrinho = [...this.state.carrinho, novoItem]
    this.setState({ carrinho: novoCarrinho })
  }

  retiraDoCarrinho = (id) => {
    const novoCarrinho = this.state.carrinho.filter(item => {
      return id !== item.id
    })
    this.setState({ carrinho: novoCarrinho })
  }

  atualizaTotal = () => {
    let totalCarrinho = 0
    for (let item of this.state.carrinho) {
      totalCarrinho = totalCarrinho + item.camiseta.preco
    }
    this.setState({ total: totalCarrinho })
  }

  render() {
    return (
      <ContainerGeral>
        {/* <Filtros /> */}
        <div></div>
        <Produtos adicionaAoCarrinho={this.adicionaAoCarrinho} />
        <Carrinho
          total={this.state.total}
          retiraDoCarrinho={this.retiraDoCarrinho}
          carrinho={this.state.carrinho} />
      </ContainerGeral>
    );
  }
}

export default App;