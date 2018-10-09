import React, { Component } from 'react';

export default class Forms extends Component {
    handleClick(e){
        e.preventDefault()
        const name = document.getElementById('name').value
        const edad = document.getElementById('edad').value
        console.log({name, edad})
    }
    render(){
        return(
            <div>
                <h4>Formularios</h4>
                <form>
                    <p>
                        <label>Nombre:</label>
                        <input id="name" name="userName" placeholder="Introduce el nombre"></input>
                    </p>
                    <p>
                        <label>Edad:</label>
                        <input id="edad" name="userEdad" placeholder="Introduce la edad"></input>
                    </p>
                    <button onClick={this.handleClick}>Enviar</button>
                </form>
            </div>
        )
    }
}