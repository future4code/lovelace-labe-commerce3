import React from 'react';
import ItemCarrinho from './ItemCarrinho'
import styled from 'styled-components';


const ContainerCarrinho = styled.div`
    width: 300px;
    height: 500px;
    border: 1px solid black;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const ContainerPreço = styled.div`
    display: flex;
    width: 90%;
`


class Carrinho extends React.Component {



    render() {



        return(
            <ContainerCarrinho>
                <h3>Carrinho:</h3>
                <ItemCarrinho />
                <ItemCarrinho />
                <ItemCarrinho />
                <ItemCarrinho />
                <ItemCarrinho />
                <ContainerPreço>
                    <p>Total: R$ 52.368,45</p>
                </ContainerPreço>
            </ContainerCarrinho>
        )
    }
}

export default Carrinho