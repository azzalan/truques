import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

class App extends Component {
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
      <div className='App' onClick={this.desaparecer}>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h1 className='App-title'>Welcome to React</h1>
        </header>
        <p className='App-intro'>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    )
  }
}

export default App
