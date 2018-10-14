

import React, { Component } from 'react';
class Box extends Component {
    render() {
        return (
            <div style={{ border: '1px solid #09f', margin:5, padding:5 }}>
                {this.props.children}
            </div>
        );
    }
}

class App extends Component {
  render() {
    return(
      <div className="App">
        <h4>Children Props</h4>
        <Box >Hola soy un children</Box>
      </div>
    )
  }
}

export default App;