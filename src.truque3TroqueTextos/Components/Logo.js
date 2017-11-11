import React, { Component } from 'react'
import logo from '../logo.svg'
import PropTypes from 'prop-types'

export default class Logo extends Component {
  render () {
    return (
      <img
        onClick={this.props.troqueTexto1Texto2}
        src={logo} className='App-logo'
        alt='logo'
      />
    )
  }
}

Logo.propTypes = {
  troqueTexto1Texto2: PropTypes.func.isRequired
}
