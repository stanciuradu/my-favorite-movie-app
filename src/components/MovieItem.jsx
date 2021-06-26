import React from "react";
import "../components/MovieItem.css";

function MovieItem(props) {
  const { Title, Year, imdbID, Type, Poster } = props;
  return (
    <div className="col-4">
      <img src={Poster} alt="" />
      <div className="title-movie">
        <h2>{Title}</h2>
        <h2>{Type}</h2>
      </div>
      <div className="description">
        <h4>{Year}</h4>
        <p>{imdbID}</p>
      </div>
    </div>
  );
}

export default MovieItem;
