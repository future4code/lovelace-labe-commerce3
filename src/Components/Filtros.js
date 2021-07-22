import React from 'react'
import App from '../App'
import styled from 'styled-components'

const FilterContainer = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid black;
`


class Filtros extends React.Component {
    state = {
        valorMin: "",
        valorMax: "",
        valorProduto: "",
    }

    onChangeValorMin = (event) => {
        this.setState({valorMin: event.target.value})
    }

    onChangeValorMax = (event) => {
        this.setState({valorMax: event.target.value})
    }

    onChangeValorProduto = (event) => {
        this.setState({valorProduto: event.target.value})
    }
    
    render() {
        return (
            <FilterContainer>
                <h3>Filtros</h3>
                <div>
                    <p> Valor míninmo: </p>
                    <input 
                    name={"valorMinimo"}
                    type="number"
                    onChange={this.onChangeValorMin}
                    value={this.state.valorMin}
                    
                    />
                </div>
                <div>
                    <p>Valor máximo:</p>
                    <input 
                    name={"valorMaximo"}
                    type="number"
                    onChange={this.onChangeValorMax}
                    value={this.state.valorMax}

                    />
                </div>
                <div>
                    <p>Busca por nome:</p>
                    <input 
                    name={"nome"}
                    type="text"
                    onChange={this.onChangeValorProduto}
                    value={this.state.valorProduto}
                    

                    />
                </div>
            </ FilterContainer>
        )
    }
}

export default Filtros