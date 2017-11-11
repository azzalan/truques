import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Desaparecer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      desaparecer: false
    }
  }

  desaparecer = () => {
    this.setState({desaparecer: true})
  }

  render () {
    if (this.state.desaparecer) return null
    return (
      <div onClick={this.desaparecer}>
        {this.props.componente}
      </div>
    )
  }
}

Desaparecer.propTypes = {
  componente: PropTypes.element.isRequired
}
