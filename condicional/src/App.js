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
class App extends Component {
  render() {
    const numbers = [1,1,2,3,4]
    return(
      <div className="App">
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
