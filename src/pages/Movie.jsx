import React, { useEffect, useState } from "react";
import axios from "axios";
import Nav from "../components/Nav";
import { useParams } from "react-router-dom";

export default function Movie() {
  let { movieId } = useParams();
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchMovie() {
    setLoading(true);
    const { data } = await axios.get(
      `http://www.omdbapi.com/?apikey=eba677f5&i=${movieId}`
    );
    setMovie(data);
    setLoading(false);
  }

  useEffect(() => {
    fetchMovie();
    console.log(movie);
  }, []);

  useEffect(() => {
    console.log(movie)
  }, [movie])

  return (
    <>
      <Nav />
      <div className="row">
        {loading ? (
          <div>loading</div>
        ) : (
          <div key={movie.imdbID}>
            <div>{movie.Title}</div>
            <div>{movie.Year}</div>
            <div>{movie.Released}</div>
            <div>{movie.Runtime}</div>
            <img src={movie.Poster} alt="" />
            {movie.Ratings.length ? (
              <div>{movie.Ratings[0].Value}</div>
            ) : <p>Kein Rating</p>}
            <div>{movie.Writer}</div>
          </div>
        )}
      </div>
    </>
  );
}
