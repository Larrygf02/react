import React, { Component } from 'react';

export default class Forms extends Component {
    constructor() {
        super()
        this.state = {
            inputName: '',
            inputEdad: 0,
            inputTerms: true
        }
    }
    handleSubmit = (e) => {
        e.preventDefault()
        //const name = document.getElementById('name').value
        //Manipulando el DOM
        /*const name = this.inputName.value
        const edad = document.getElementById('edad').value
        console.log({name, edad})*/
        console.log(this.state)
    }
    handleChange = (e) => {
        console.log('Change')
        console.log(e.target.checked)
        this.setState({ inputTerms: e.target.checked })
    }
    render(){
        return(
            <div>
                <h4>Formularios</h4>
                <form onSubmit={this.handleSubmit}>
                    <p>
                        <label htmlFor="name">Nombre:</label>
                        <input id="name" name="userName" placeholder="Introduce el nombre"
                        ref={inputElement => this.inputName = inputElement} value={this.state.inputName} 
                        onChange ={e => this.setState({ inputName: e.target.value })}
                        required/>
                    </p>
                    <p>
                        <label htmlFor="edad">Edad:</label>
                        <input id="edad" name="userEdad" placeholder="Introduce la edad" value={this.state.inputEdad} 
                        onChange = {e => this.setState({ inputEdad: e.target.value })}
                        required></input>
                    </p>
                    <p>
                        <label>
                            <input onChange={this.handleChange} type="checkbox" checked={this.state.inputTerms}/>
                            Acepto los términos
                        </label>
                    </p>
                    <button>Enviar</button>
                </form>
            </div>
        )
    }
}