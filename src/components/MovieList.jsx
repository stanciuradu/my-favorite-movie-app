import React from "react";
import MovieItem from "./MovieItem";
import { Link } from "react-router-dom";
import '../components/MovieList.css';

function MovieList(props) {
  const { movies } = props;
  return (
    <div className="container">
      <div className="row">
        {movies.map((movie, index) => {
          return (
            <MovieItem
              Title={movie.Title}
              Year={movie.Year}
              imdbID={movie.imdbID}
              Type={movie.Type}
              Poster={movie.Poster}
              key={index}
            />
          );
        })}
      </div>
      <Link to='/'>
        <button className='btn btn-info w-50 mt-2'>Înapoi la Home</button>
      </Link>
    </div>
  );
}

export default MovieList;
