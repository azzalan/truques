import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Texto2 extends Component {
  render () {
    return (
      <div className='App-intro'>
        {this.props.texto2}
      </div>
    )
  }
}

Texto2.propTypes = {
  texto2: PropTypes.element.isRequired
}
