import React, {Component} from 'react';
import PropTypes from 'prop-types';

const ANIMAL_IMAGES = {
  cat: 'https://goo.gl/PoQQXb',
  dolphin: 'https://goo.gl/BbiKCd',
  panda: 'https://goo.gl/oNbtoq',
}
const ANIMALS = Object.keys(ANIMAL_IMAGES)

class AnimalImage extends Component {
    state = { src: ANIMAL_IMAGES[this.props.animal]}
    componentWillReceiveProps (nextProps) {
        console.log('1. Component Will Recieve Props')
        this.setState({ src: ANIMAL_IMAGES[nextProps.animal]})
    }
    //El PureComponent se encarga de evaluar esta funcion
    //por eso ya no es necesario ponerlo
    shouldComponentUpdate (nextProps) {
        console.log('2. Should Component Update')
        console.log(nextProps)
        //hay que devolver un booleano para saber si se debe renderizar o no
        //por defecto es true
        return this.props.animal !== nextProps.animal
    }

    componentWillUpdate (nextProps, nextState) {
        console.log('3. Component WillUpdate:', nextProps, nextState)
        const img = document.querySelector('img')
        //web animations
        img.animate([{
            filter: 'blur(0px)'
        },{
            filter: 'blur(2px)'
        }],{
            duration: 500,
            easing: 'ease'
        })
    }
    
    componentDidMount (prevProps, prevState) {
        console.log('4. Did Update')
        const img = document.querySelector('img')
        img.animate([{
            filter: 'blur(2px)'
        },{
            filter: 'blur(0px)'
        }],{
            duration: 500,
            easing: 'ease'
        })
    }
    render(){
        console.log('-> render')
        return(
            <div>
                <p>Selected {this.props.animal}</p>
                <img alt={this.props.animal} src={this.state.src} width='250'></img>
            </div>
        )
    }
}

AnimalImage.propTypes = {
    //animal: PropTypes.oneOf(['cat','dolphin','panda'])
    animal: PropTypes.oneOf(ANIMALS)
}
AnimalImage.defaultProps = {
    animal: 'panda'
}
class ExampleLifeCycle extends Component {
    state = { animal: 'panda'}
  _renderAnimalButton = (animal) => {
      return(
          <button 
          //disabled={animal === this.state.animal}
          key={animal} 
          onClick={() => this.setState({ animal })}
          >{ animal }</button>
      )
  }
  render() {
    return (
      <div>
        <h4>Ciclo de actualizacion: Ejemplo ShouldComponentUpdate</h4>
        {ANIMALS.map(this._renderAnimalButton)}
        {/*this._renderAnimalButton('panda')*/}
        {/*this._renderAnimalButton('cat')*/}
        {/*this._renderAnimalButton('dolphin')*/}
        {/* <button onClick={() => this.setState({animal: 'panda' })}> Panda</button>
        <button onClick={() => this.setState({animal: 'cat' })}> Cat</button>
        <button onClick={() => this.setState({animal: 'dolphin' })}> Dolphin</button> */}
        <AnimalImage animal={this.state.animal }/>
      </div>
    )
  }
}
export default ExampleLifeCycle;