import React, { Component } from 'react';
class App extends Component {
  constructor (props) {
    console.log('constructor')
    super(props)
    this.state = { mensajeInicial: 'hola'}
  }

  handleClick = () => {
    this.setState({ mensajeInicial: 'cambio el mensaje'})
  }
  render() {
    console.log('render')
    const {mensajeInicial} = this.state
    return(
      <div className="App">
        <h4>Ciclo Montaje: constructor</h4>
        {mensajeInicial}
        <button onClick={this.handleClick}>Cambiar mensaje</button>
      </div>
    )
  }
}

export default App;