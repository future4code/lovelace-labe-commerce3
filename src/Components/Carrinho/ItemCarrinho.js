import React from 'react'
import styled from 'styled-components'


const ContainerItem = styled.div`
    width: 90%;
    height: 50px;
    /* border: 1px solid black; */
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const ContainerNome = styled.span`
    margin-left: -70px;
`

class ItemCarrinho extends React.Component {
    render() {
        return (
            <ContainerItem>
                <span>2x</span>
                <ContainerNome>Camisa Alfa</ContainerNome>
                <button>Remover</button>
            </ContainerItem>
        )
    }
}

export default ItemCarrinho