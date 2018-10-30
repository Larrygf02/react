import React, {Component} from 'react';
import ComponentWillUnMount from './sections/WillUnMount';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ComponentWillUnMount></ComponentWillUnMount>
      </div>
    )
  }
}

export default App;