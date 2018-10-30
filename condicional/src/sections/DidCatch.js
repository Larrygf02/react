import React, {Component} from 'react'

class ButtonError extends Component {
    state = { throwError: false}
    render(){
        if(this.state.throwError){
            throw new Error('Error lanzado desde el boton')
        }
        return(
            <button onClick={() => this.setState({throwError: true})}>Lanza error</button>
        )
    }

}
class ExampleComponentDidCatch extends Component {
    state = { hasError:false, errorMsg:''}
    componentDidCatch(error, errorInfo){
        console.log('ComponentDidCatch')
        console.log({error, errorInfo})
        this.setState({ hasError: true, errorMsg: error.toString()})
    }
    render(){
        if (this.state.hasError){
            return(
                <div>
                    <p>Error en el componente: {this.state.errorMsg}</p>
                    <button onClick={() => this.setState({ hasError:false})}>Volver a la aplicacion</button>
                </div>
            )
        }
        return(
            <div>
                <h4>Ciclo desmontaje: ComponentDidCatch</h4>
                <ButtonError></ButtonError>
            </div>
        )
    }
}
export default ExampleComponentDidCatch;