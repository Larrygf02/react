import React, { Component } from 'react'
//componentes
import { Title } from '../components/Title'
import { SearchForm } from '../components/SearchForm'
import { MoviesList } from '../components/MovieList'

export class Home extends Component {
    state = { usedSearch: false, results: [] }
    _handleResults = (results) => {
      this.setState({ results, usedSearch: true })
    }
    _renderResults () {
      return this.state.results.length === 0 
      ? <p>Sin resultados</p> 
      : <MoviesList movies={this.state.results}></MoviesList>
    }
    render() {
        return (
            <div>
                <Title>Search movies</Title>
                <div className="searchForm-wrapper">
                    <SearchForm onResults={this._handleResults} />
                </div>
                {this.state.usedSearch ? this._renderResults() : <small>Use el formulario para buscar una pelicula</small>}
            </div>
        )
    }
}