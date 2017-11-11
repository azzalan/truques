import React, { Component } from 'react'
import Logo from './Logo'
import Texto1 from './Texto1'
import Desaparecer from './Desaparecer'

export default class Preto extends Component {
  render () {
    return (
      <header className='App-header'>
        <Desaparecer componente={<Logo />} />
        <Desaparecer componente={<Texto1 />} />
      </header>
    )
  }
}
