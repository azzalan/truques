import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Texto1 extends Component {
  render () {
    return (
      <h1 className='App-title'>{this.props.texto1}</h1>
    )
  }
}

Texto1.propTypes = {
  texto1: PropTypes.element.isRequired
}
