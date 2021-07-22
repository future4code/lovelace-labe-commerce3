import React from 'react';
import Filtros from './Components/Filtros'
import Produtos from './Components/Produtos/Produtos'
import Carrinho from './Components/Carrinho/Carrinho'
import {parse, stringify} from 'flatted';
import styled from 'styled-components';
import './App.css';
import nebulosa1 from './Components/Img/nebulosa1.png'

const ContainerMain = styled.div`
  display: flex;
  /* grid-template-columns: 1fr 4fr 1fr; */
  justify-content: center;
  /* background:url(${nebulosa1});
  background-repeat: no-repeat;
  background-size: 100%; */
  /* background-color: black; */
`

const ContainerGeral = styled.div`
  display: grid;
  grid-template-rows: 70px 1fr 60px;
`

const Header = styled.header`
  background-color: skyblue;
  font-family: 'Qahiri', sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  > h1 {
    padding-bottom: 20px;
  }
`

const Footer = styled.footer`
  background-color: skyblue;
`


class App extends React.Component {
  state = {
    // Valores Carrinho
    carrinho: [],
    total: 0,
    // Valores Filtro
    valorMin: 0,
    valorMax: 500,
    buscaNome: "",
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

  // métodos filtro
  onChangeValorMin = (event) => {
      this.setState({valorMin: event.target.value})
  }

  onChangeValorMax = (event) => {
      this.setState({valorMax: event.target.value})
  }

  onChangeBuscaNome = (event) => {
      this.setState({buscaNome: event.target.value})
  }


  render() {
    return (
      <ContainerGeral>
        <Header>
          <h1>SpaceWear</h1>
        </Header>

        <ContainerMain>
          <Filtros 
          onChangeValorMin={this.onChangeValorMin}
          onChangeValorMax={this.onChangeValorMax}
          onChangeBuscaNome={this.onChangeBuscaNome}
          estadoValorMin={this.state.valorMin}
          estadoValorMax={this.state.valorMax}
          estadoBuscaNome={this.state.buscaNome}
          />
          <Produtos 
          adicionaAoCarrinho={this.adicionaAoCarrinho} 
          estadoValorMin={this.state.valorMin}
          estadoValorMax={this.state.valorMax}
          estadoBuscaNome={this.state.buscaNome}
          />
          <Carrinho
            total={this.state.total}
            retiraDoCarrinho={this.retiraDoCarrinho}
            carrinho={this.state.carrinho} />
        </ContainerMain>

        <Footer>
          
        </Footer>
      </ContainerGeral>
    );
  }
}

export default App;