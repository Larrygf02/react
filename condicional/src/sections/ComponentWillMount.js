import React, { Component } from 'react'

class ComponentWillMount extends Component {
    constructor(props){
        console.log('constructor')
        super(props)
        this.state = { 
                        mensaje: 'Aprendiendo Ciclo de vida de react',
                        scroll: 0,    
                    }
    }

    componentWillMount() {
        console.log('Component Will Mount')
        this.setState({ mensaje: 'Mensaje modificado'})
    }

    componentDidMount() {
        console.log('Desmontaje')
        document.addEventListener('scroll',  () => {
            console.log(window.scrollY)
            this.setState({ scroll: window.scrollY })
        })
    }

    //Cada vez que el state react vuelve a ejecutar el metodo render con
    //los elementos necesarios
    render(){
        console.log('render')
        return(
            <div>
                <h4>Ciclo de vida del Componente</h4>
                <strong>Scroll: {this.state.scroll }</strong>
                <p>{ this.state.mensaje }</p>
            </div>
        )
    }
}

export default ComponentWillMount