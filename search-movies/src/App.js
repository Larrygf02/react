import React, { Component } from 'react';
//componentes
import { Title } from './components/Title'
import { SearchForm } from './components/SearchForm'
import './App.css';

//importando Bulma
import 'bulma/css/bulma.css'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Title>Search movies</Title>
        <div className="searchForm-wrapper">
          <SearchForm/>
        </div>
      </div>
    );
  }
}

export default App;
