import React, { Component } from 'react'
import './App.css'
import Branco from './Components/Branco'
import Preto from './Components/Preto'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      texto1: <p>Welcome to React</p>,
      texto2: <p>To get started, edit <code>src/App.js</code> and save to reload.</p>
    }
  }

  troqueTexto1Texto2 = () => {
    this.setState({
      texto1: this.state.texto2,
      texto2: this.state.texto1
    })
  }

  render () {
    return (
      <div className='App' onClick={this.desaparecer}>
        <Preto
          texto1={this.state.texto1}
          troqueTexto1Texto2={this.troqueTexto1Texto2}
        />
        <Branco texto2={this.state.texto2} />
      </div>
    )
  }
}

export default App
