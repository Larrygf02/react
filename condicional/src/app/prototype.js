

import React, { Component } from 'react';
import PropTypes from 'prop-types';
class Box extends Component {
    render() {
        return (
            <div style={{ border: '1px solid #09f', margin:5, padding:5 }}>
                {this.props.children}
            </div>
        );
    }
}

class Article extends Component {
  static propTypes = {
    author: PropTypes.string.isRequired
  } 
  /* constructor (props) {
    super(props)
    if (typeof props.author === 'undefined') {
      console.warn('author prop is required')
      //throw new Error('author prop is required')
    }
  } */
  render() {
    const {title, author, date, children} = this.props
    return(
      <section>
        <h2>{ title }</h2>
        <p><em>Escrito por { author }</em></p>
        <Box>{ date }</Box>
        <article>{ children }</article>
      </section>
    )
  }
}

class App extends Component {
  render() {
    return(
      <div className="App">
        <h4>Children Props</h4>
        <Article
        author={true}
        date={new Date().toLocaleString()}
        title='Aprendiendo React'>
          El contenido que envolvemos dentro del componente
          se le pasa al atributo children
        </Article>
      </div>
    )
  }
}

export default App;