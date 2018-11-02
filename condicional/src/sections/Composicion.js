import React, {Component} from 'react';
//import ExampleComponentDidCatch from './sections/DidCatch.js';

class Button extends Component {
  render(){
    return(
      <button style={{ borderColor: this.props.borderColor, display: 'block'}}>
        {this.props.label}
      </button>
    )
  }
}
Button.defaultProps = {
  borderColor: '#09f'
}

class ButtonDanger extends Component {
  render() {
    return(
      <Button borderColor='red' label={this.props.label}></Button>
    )
  }
}

class ButtonWithLegend extends Component {
  render() {
    return(
      <div>
        <Button borderColor={this.props.borderColor} label={this.props.label}></Button>
        <small>{ this.props.legend}</small>
      </div>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <h4>Composicion vs Herencia</h4>
        <Button label="Click Aqui con composicion"></Button>
        <br />
        <ButtonDanger label="cuidado con composicion"></ButtonDanger>
        <br />
        <ButtonWithLegend label="Legend" legend="boton con legenda"></ButtonWithLegend>
      </div>
    )
  }
}

export default App;