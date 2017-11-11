import React, { Component } from 'react'
import './App.css'
import Branco from './Components/Branco'
import Preto from './Components/Preto'

class App extends Component {
  render () {
    return (
      <div className='App' onClick={this.desaparecer}>
        <Preto />
        <Branco />
      </div>
    )
  }
}

export default App
