import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

/* function Hello(props){
  return <h2>Bienvenidos a este curso</h2>
} */

//const Hello = (props) => <h2>{ props.title }</h2>

class Hello extends Component {
  render(){
    return <h2>{ this.props.title}</h2>
  }
}

class Texto extends Component {
  render(){
    const { boolean, arrayOfElement, text, number, objectWith, multiply, titulo } = this.props
    //No se pueden modificar las props
    //this.props.title = <h3>Otra cosa</h3> (Error)
    const textoSegunBool = boolean ? 'Cierto': 'False'
    const mappedNumbers = arrayOfElement.map(multiply)
    return (
        <div>
          <p>{ text }</p>
          <p>{ number }</p>
          <p>{ textoSegunBool }</p>
          <p>{ mappedNumbers.join(', ') }</p>
          <p>{ objectWith.key }</p>
          {titulo}
           
        </div>
      )
  }
}
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Hello title="Componente desde props"/>
        </div>
        <Texto 
        objectWith = {{key:'value', key2: 'otherValue'}}
        arrayOfElement={[2,3,4]}
        boolean={false}
        multiply={(n)=> n *2 }
        number={2} 
        text="Aprendiendo React"
        titulo={<h3>Titulo</h3>}/>
      </div>
    );
  }
}

export default App;
