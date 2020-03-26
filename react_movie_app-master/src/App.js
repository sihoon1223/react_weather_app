import React, {Component} from 'react';
import './App.css';
import Movie from './Movie'


//Render: componentWillMount() -> render() -> componentDidMount()
//Update: componentWillReceiveProps() -> shouldComponentUpdate() -> componentWillUpdate() -> render() -> componentDidUpdate()

class App extends Component {
    state = {}

    componentDidMount() {
        this._getMovies();
    }

    _getMovies = async () => {
        const movies = await this._callApi();
        this.setState({
            movies
        });
    }

    _callApi = () => {
        //, {mode: 'no-cors'}
        //영화추천사이트에서 데이터 받아오기 https://yts.ag/api/v2/list_movies.json?sort_by=rating
        return fetch('https://yts.ag/api/v2/list_movies.json?sort_by=rating')
            .then(response => response.json())
            .then(json => json.data.movies)
            .catch(err => console.log(err));
    }


    // 영화리스트를 불러오는 function - 내가 만든 함수는 보통 '_' 붙여야 가시성이 좋다
    _renderMovies = () => {
        const movies = this.state.movies.map(movie => {
            console.log(movie)
            return <Movie
                title={movie.title_english}
                poster={movie.medium_cover_image}
                key={movie.id}
                genres={movie.genres}
                synopsis={movie.synopsis}/>
        })
        return movies;
    }

    render() {
        const {movies} = this.state;
        return (
            <div className= {movies ? "App": "App--loading"}>
                {/* 내가 찾고 있는 데이터가 있는지 확인 ( 참이면 영화정보, 거짓이면 loading text) */}
                {this.state.movies ? this._renderMovies() : 'Loading'}
            </div>
        );
    }
}

export default App;
