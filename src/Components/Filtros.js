import React from 'react'
import App from '../App'
import styled from 'styled-components'

const FilterContainer = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid black;
`


class Filtros extends React.Component {
   
    render() {
        return (
            <FilterContainer>
                <h3>Filtros</h3>
                <div>
                    <p> Valor míninmo: </p>
                    <input 
                    name={"valorMinimo"}
                    type="number"
                    onChange={this.props.onChangeValorMin}
                    value={this.props.estadoValorMin}
                    
                    />
                </div>
                <div>
                    <p>Valor máximo:</p>
                    <input 
                    name={"valorMaximo"}
                    type="number"
                    onChange={this.props.onChangeValorMax}
                    value={this.props.estadoValorMax}

                    />
                </div>
                <div>
                    <p>Busca por nome:</p>
                    <input 
                    name={"nome"}
                    type="text"
                    onChange={this.props.onChangeBuscaNome}
                    value={this.props.estadoBuscaNome}
                    

                    />
                </div>
            </ FilterContainer>
        )
    }
}

export default Filtros