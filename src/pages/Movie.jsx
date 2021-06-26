import React, { Component } from "react";
import MovieList from "../components/MovieList";

class Movie extends Component {
  constructor() {
    super();
    this.state = {
      movies: [
        {
          Title: "Spiral: From the Book of Saw",
          Year: "2021",
          imdbID: "tt10342730",
          Type: "movie",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BZjI4ZWQwYzctMGJlMi00OTE1LWFkNjMtY2VlOGQxZmVhNDYyXkEyXkFqcGdeQXVyMjMxOTE0ODA@._V1_SX300.jpg",
        },
        {
          Title: "The Spiral Staircase",
          Year: "1946",
          imdbID: "tt0038975",
          Type: "movie",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BYTZiNjQ3YzItMmRjOS00ZDRiLWFhZGEtMWQyZGM3ZTNmNTVjL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg",
        },
        {
          Title: "Spiral",
          Year: "2007",
          imdbID: "tt0491162",
          Type: "movie",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BNTA4MzA3YmEtZmU2Yy00OTdhLThhMWQtNjgzYjE1MTVlYTgxXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
        },
        {
          Title: "Spiral",
          Year: "2019",
          imdbID: "tt9247314",
          Type: "movie",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BMmU0Nzc0OGYtNzRlZS00NjIwLTkxOTktZWU4NWQ1ODhiYTk0XkEyXkFqcGdeQXVyNDgyNzAxMzY@._V1_SX300.jpg",
        },
        {
          Title: "The Spiral Road",
          Year: "1962",
          imdbID: "tt0056516",
          Type: "movie",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BN2RmMDViNjMtOGY1Yi00OTM1LTk5NTYtMWY1NjYzNDFjODY0XkEyXkFqcGdeQXVyNTk1MTk0MDI@._V1_SX300.jpg",
        },
        {
          Title: "The Spiral",
          Year: "1978",
          imdbID: "tt0078310",
          Type: "movie",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BYjU2MGUwODgtMTUzMC00YWIwLWJkMzctMTAzYjczYjg3YTRlXkEyXkFqcGdeQXVyOTA1ODU0Mzc@._V1_SX300.jpg",
        },
        {
          Title: "The Spiral Staircase",
          Year: "1975",
          imdbID: "tt0073739",
          Type: "movie",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BNmI0NmZjNDctODNjYS00N2IyLWIyNDgtY2JhOGE1Zjk0MzZlXkEyXkFqcGdeQXVyMjUyNDk2ODc@._V1_SX300.jpg",
        },
        {
          Title: "The Spiral Staircase",
          Year: "2000",
          imdbID: "tt0203941",
          Type: "movie",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BODdhZTMyMTAtNGUwMi00ODVhLTk4OTItZjNlZTQ2ZjFhNTc5XkEyXkFqcGdeQXVyMTM0ODAyOTc@._V1_SX300.jpg",
        },
        {
          Title: "The Spiral",
          Year: "2012–",
          imdbID: "tt2264587",
          Type: "series",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BNDkzMDc4NDM2NV5BMl5BanBnXkFtZTgwNzEyNzI1MjE@._V1_SX300.jpg",
        },
      ],
    };
  }
  render() {
    return (
      <div className="container">
          {/* pasez array-ul ca props pentru a se mapa prin el și a se afisa obiectele */}
        <MovieList movies={this.state.movies} />
      </div>
    );
  }
}

export default Movie;
