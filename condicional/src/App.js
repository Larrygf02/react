import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import ConditionalSection from './sections/conditional.js'

class App extends Component {
  render() {
    return(
      <div className="App">
        <ConditionalSection/>
      </div>
    )
  }
}

export default App;
