import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import ConditionalSection from './sections/conditional.js'
import person from './data/person.json'

class PersonItem extends Component {
  render(){
    const {person} = this.props
    return (
      <li>
        <p><strong>Nombre:</strong>{person.name}, <strong>Edad:</strong>{person.edad}</p>
      </li>
    )
  }
}

class Eventos extends Component {
  constructor () {
    super()
    this.state = {mouseX:0, mouseY:0}
  }
  handleMouseMove = (e) => {
    const {clientX,clientY} = e
    this.setState({mouseX: clientX, mouseY:clientY})
  }
  handleClick(e) {
    console.log(e)
    alert('Hola')
  }
  render(){
    return (
      <div>
        <h4>Eventos</h4>
        <button onClick={this.handleClick}>Haz click</button>
        <div onMouseMove={this.handleMouseMove} style={{ border:'1px solid #000', marginTop: 10}}>
          <p>{this.state.mouseX}, {this.state.mouseY}</p>
        </div>
      </div>
    )
  }
}
class App extends Component {
  render() {
    const numbers = [1,1,2,3,4]
    return(
      <div className="App">
        <Eventos/>
        {<ConditionalSection/>}
        {/*Usando Listas*/}
        { numbers.map((n,index) => {
          return <p key={index}>Soy el numero {n}</p>
        })}
        {/*Usando objetos*/}
        <ul>
          {
            person.map(p => {
              return (
                <PersonItem key={p.id} person={p}/>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

export default App;
