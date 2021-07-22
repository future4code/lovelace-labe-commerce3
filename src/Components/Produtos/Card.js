import React from 'react'
import Styled from 'styled-components'

const ContainerCard= Styled.div`
    height: 450px;
    width: 300px;
    border: 1px solid black;
    text-align: center;
    > img {
        width: 100%;
    }
` 



class Card extends React.Component{
    render(){
        
        return (
            <ContainerCard>
               {this.props.imagem}
                <p>{this.props.nome}</p>
                <p>R$ {this.props.preco}</p>

                <button onClick={() => this.props.adicionaAoCarrinho(this.props.camiseta)}>Adicionar ao Carrinho</button>

            </ContainerCard>

        )


    }
}

export default Card;
