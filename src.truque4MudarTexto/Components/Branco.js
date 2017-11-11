import React, { Component } from 'react'
import Texto2 from './Texto2'
import Desaparecer from './Desaparecer'
import PropTypes from 'prop-types'

export default class Branco extends Component {
  constructor (props) {
    super(props)
    this.state = {
      value: ''
    }
  }

  controleInput = (e) => {
    this.setState({value: e.target.value})
  }

  mudarTexto2 = () => {
    this.props.mudarTexto2(<p>{this.state.value}</p>)
  }

  render () {
    return (
      <div>
        <Desaparecer componente={<Texto2 texto2={this.props.texto2} />} />
        <input
          type='text'
          value={this.state.value}
          onChange={this.controleInput}
        />
        <input
          type='button'
          value='Enviar'
          onClick={this.mudarTexto2}
        />
      </div>
    )
  }
}

Branco.propTypes = {
  texto2: PropTypes.element.isRequired,
  mudarTexto2: PropTypes.func.isRequired
}
