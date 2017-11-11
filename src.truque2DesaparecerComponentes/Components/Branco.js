import React, { Component } from 'react'
import Texto2 from './Texto2'
import Desaparecer from './Desaparecer'

export default class Branco extends Component {
  render () {
    return (
      <div>
        <Desaparecer componente={<Texto2 />} />
      </div>
    )
  }
}
