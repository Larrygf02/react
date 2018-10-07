import React, { Component } from 'react'

class LoginButton extends Component {
    render(){
        return <button>Iniciar Sesión</button>
    }
}

class LogoutButton extends Component {
    render(){
        return (
            <div>
                <p>Bienvenido Usuario</p>
                <button>Cerrar Sesión</button>
            </div>
        )
    }
}

/* function useConditionalRendering(mostrarA){
    if(mostrarA){
        return <ComponentA/>
    }else{
        return <ComponentB/>
    }
} */
export default class ConditionalSection extends Component{
    constructor() {
        super()
        this.state = { isUserLogged: true }
    }
    render(){
        //const ConditionalRendering = this.state.mostrarA ? <ComponentA/> : <ComponentB/>
        return (
            <div>
                <h4>Conditional Rendering </h4>
                {this.state.isUserLogged ? <LogoutButton/> : <LoginButton/>}
                {/*useConditionalRendering(this.state.mostrarA)*/}
                {/*ConditionalRendering*/}
            </div>
        )
    }
}