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

class ItemCarrinho extends React.Component {
    render() {
        return (
            <ContainerItem>
                <span>2x - Camisa Alfa</span>
                <button>Remover</button>
            </ContainerItem>
        )
    }
}

export default ItemCarrinho