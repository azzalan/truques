import React, { Component } from 'react'
import Texto2 from './Texto2'
import Desaparecer from './Desaparecer'
import PropTypes from 'prop-types'

export default class Branco extends Component {
  render () {
    return (
      <div>
        <Desaparecer componente={<Texto2 texto2={this.props.texto2} />} />
      </div>
    )
  }
}

Branco.propTypes = {
  texto2: PropTypes.element.isRequired
}
