import React, {Component} from 'react'

class ComponentnUnMount extends Component {
    state = { windowWidth: 0}
    _updateStateWithWindowWidth = () => {
        this.setState({ windowWidth: document.body.clientWidth })
    }
    componentDidMount () {
        this._updateStateWithWindowWidth()
        window.addEventListener(
            'resize',
            this._updateStateWithWindowWidth
        )
    }
    componentWillUnmount () {
        window.removeEventListener(
            'resize',
            this._updateStateWithWindowWidth
        )
    }
    render(){
        return(
            <div>
                <p>Componente a desmontar</p>
                <p>Ancho {this.state.windowWidth} </p>
            </div>
        )
    }
}
class ComponentWillUnMount extends Component {
    state = { mostrarComponente: true}
    render() {
        if(this.state.mostrarComponente){
            return(
                <div>
                    <h4>Ciclo de desmontaje: ComponentWillUnMount</h4>
                    <ComponentnUnMount/>
                    <button onClick={() => this.setState({ mostrarComponente:false })}>Desmontar Componente</button>
                </div>
            )
        }else{
            return(
                <p>Componente Desmontado</p>
            )
        }
    }
}

export default ComponentWillUnMount