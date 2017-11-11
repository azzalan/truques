import React, { Component } from 'react'
import Logo from './Logo'
import Texto1 from './Texto1'
import Desaparecer from './Desaparecer'
import PropTypes from 'prop-types'

export default class Preto extends Component {
  render () {
    return (
      <header className='App-header'>
        <Logo
          troqueTexto1Texto2={this.props.troqueTexto1Texto2}
        />
        <Desaparecer componente={<Texto1 texto1={this.props.texto1} />} />
      </header>
    )
  }
}

Preto.propTypes = {
  texto1: PropTypes.element.isRequired,
  troqueTexto1Texto2: PropTypes.func.isRequired
}
