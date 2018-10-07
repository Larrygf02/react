import React, { Component } from 'react';
import './App.css';

class Contador extends Component {
  constructor (props){
    super(props)
    console.log(this.props.contadorInicial)
    this.state = { contador: this.props.contadorInicial}
    //El metodo setState es asincrono
    setInterval(() => this.setState({ contador: this.state.contador + 1}), 1000)
  }
  render(){
    //const contador = 0
    //return <span>{ this.state.contador }</span>
    return <ContadorNumero numero={ this.state.contador }/>
  }
}
//Inicializando props
Contador.defaultProps = {
  contadorInicial: 0
}

class ContadorNumero extends Component {
  render() {
    console.log('ContadorNumero render()')
    return <span>{ this.props.numero }</span>
  }
}
class App extends Component {
  render() {
    return (
      <div className="App">
        <p>Primer componente con state</p>
        <Contador contadorInicial={100}/>
      </div>
    );
  }
}

export default App;
