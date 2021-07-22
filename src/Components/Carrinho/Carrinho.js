import React from 'react';
import ItemCarrinho from './ItemCarrinho'
import styled from 'styled-components';


const ContainerCarrinho = styled.div`
    width: 300px;
    height: 500px;
    border: 1px solid black;
    margin-top: 120px;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const ContainerPreço = styled.div`
    display: flex;
`

class Carrinho extends React.Component {

    render() {

        const listaCarrinho = this.props.carrinho.map(item => {
            return (
                <ItemCarrinho 
                key={item.id}
                nome={item.camiseta.nome}
                id={item.id}
                retiraDoCarrinho={this.props.retiraDoCarrinho}
                />
            )
        })
        return(
            <ContainerCarrinho>
                <h3>Carrinho:</h3>
                {listaCarrinho}
                <ContainerPreço>
                    <p>Valor Total: R$ {this.props.total},00</p>
                </ContainerPreço>
            </ContainerCarrinho>
        )
    }
}

export default Carrinho