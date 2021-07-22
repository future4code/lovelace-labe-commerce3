import React from 'react'
import Styled from 'styled-components'
import camiseta1 from './Camiseta-1.jpg'
import Camiseta2 from '../Img/camiseta2.jpg'
import Camiseta3 from '../Img/camiseta3.jpg'
import Camiseta4 from '../Img/camiseta4.jpg'
import Camiseta5 from '../Img/camiseta5.jpg'
import Camiseta6 from '../Img/camiseta6.jpg'
import Card from './Card'
import styled from 'styled-components'

const ContainerProdutos = Styled.div`
    display: flex;
    width: 60%;
    padding: 15px;
    margin:0 auto;
    flex-wrap: wrap;

    > div{
        margin: 10px;
    }


` 
const Header = Styled.div`
    display:flex;
    width: 100%;
    justify-content: space-between;


` 


class Produtos extends React.Component {

    state ={
        ordenacao: 'crescente'
        
    }

    onChangeInput = (event) => {
        this.setState({ordenacao: event.target.value})

    }

    render(){
        const Produtos = [
            {
                id: 1,
                nome: 'camiseta 1',
                preco: 50,
                imagem: <img src={camiseta1}/>
            },
            {
                id: 2,
                nome: 'camiseta 2',
                preco: 50,
                imagem: <img src={Camiseta2}/>
            },
            {
                id: 3,
                nome: 'camiseta 3',
                preco: 50,
                imagem: <img src={Camiseta3}/>
            },
            {
                id: 4,
                nome: 'camiseta 4',
                preco: 50,
                imagem: <img src={Camiseta4}/>
            },
            {
                id: 5,
                nome: 'camiseta 5',
                preco: 50,
                imagem: <img src={Camiseta5}/>
            },
            {
                id: 6,
                nome: 'camiseta 6',
                preco: 50,
                imagem: <img src={Camiseta6}/>
            }
        
        
         ];

         const listaOrdenada = Produtos.sort((a, b) => {
            if (this.state.ordenacao === 'crescente') {
                return a.nome.localeCompare(b.nome)
            } else {
                return b.nome.localeCompare(a.nome)
            }
        })





         const listaProdutos = listaOrdenada.map(camiseta => {
             return (
                 <Card
                 nome={camiseta.nome}
                 preco={camiseta.preco}
                 imagem={camiseta.imagem}
                 camiseta={camiseta}
                 />
             )


    })
        console.log(this.state.ordenacao)
        return(
            <ContainerProdutos>
                <Header>
                <h2>Quantidade de Produtos: {Produtos.length}</h2>
                <div>
                <p>Ordenação</p>
                <select onChange={this.onChangeInput}>
                    <option value='crescente'>Crescente</option>
                    <option value='decrescente'>Decrescente</option>
                </select>
                </div>
                </Header>
                {listaProdutos}
            </ContainerProdutos>

        )
    }
}


export default Produtos;