import React, {Component} from 'react';
//import ExampleComponentDidCatch from './sections/DidCatch.js';

class Button extends Component {
  constructor(props){
    super(props)
    this.borderColor = '#09f'
  }
  render(){
    return(
      <button style={{ borderColor: this.borderColor, display: 'block'}}>
        {this.props.label}
      </button>
    )
  }
}

class ButtonDanger extends Button {
  constructor(props){
    super(props)
    this.borderColor = 'red'
  }
}

class ButtonWithLegend extends Button {
  render() {
    return(
      <div>
        {super.render()}
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
        <Button label="Click Aqui"></Button>
        <br />
        <ButtonDanger label="cuidado"></ButtonDanger>
        <br />
        <ButtonWithLegend label="Legend" legend="boton con legenda"></ButtonWithLegend>
      </div>
    )
  }
}

export default App;