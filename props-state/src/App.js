import React, { Component } from 'react';
import './App.css';

class Contador extends Component {
  constructor (){
    super()
    this.state = { contador: 1}
    //El metodo setState es asincrono
    setInterval(() => this.setState({ contador: this.state.contador + 1}), 1000)
  }
  render(){
    //const contador = 0
    return <span>{ this.state.contador }</span>
  }
}
class App extends Component {
  render() {
    return (
      <div className="App">
        <p>Primer componente con state</p>
        <Contador/>
      </div>
    );
  }
}

export default App;
