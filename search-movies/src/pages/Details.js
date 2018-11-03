import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { ButtonBackHome } from '../components/ButtonBackHome'
const API_KEY = '7ac36717'
export class Detail extends Component {
    static propTypes = {
        //id: PropTypes.string
        match: PropTypes.shape({
            params: PropTypes.object,
            isExact: PropTypes.bool,
            path: PropTypes.string,
            url: PropTypes.string
        })
    }

    state = { movie: {} }
    _fetchMovie ({ id }){
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`)
        .then(res => res.json())
        .then(movie => {
            console.log({movie})
            this.setState({movie})
        })
    }
    componentDidMount () {
        const { id } = this.props.match.params
        this._fetchMovie({ id })
    }
    render(){
        const { Title, Poster, Actors, Metascore, Plot } = this.state.movie
        return(
            <div>
                <ButtonBackHome/>
                <h1>{Title}</h1>
                <img alt={Poster} src={Poster}/>
                <h3>{Actors}</h3>
                <span>{Metascore}</span>
                <p>{Plot}</p>
            </div>
        )
    }
}