import './App.css';
import MovieList from './components/MovieList';
import { useEffect, useState } from 'react';
//import { movies as MovieData } from './movies';

function App() {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/movies.json`)
    .then(res => res.json())
    .then(moviesData =>{
      setMovies(moviesData.movies);
      });
  }, []);

  const onMovieDelete = (id) =>{
    setMovies(state => state.filter(x => x.id !== id));
  }

  const onMovieSelect = (id) =>{
    setMovies(state => state.map(x => ({...x, onMovieDelete, onMovieSelect, selected: x.id === id})));
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Movies to watch in your free time</h1>
        <MovieList movies = {movies} onMovieDelete={onMovieDelete} onMovieSelect={onMovieSelect}/>
      </header>
    </div>
  );
};

export default App;
