import React, { useEffect, useState } from "react";
import axios from "axios";
import Nav from "../components/Nav";
import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Results = () => {
  let {searchString} = useParams()

  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState(searchString);
  const [onlyMovies, setOnlyMovies] = useState([]);

  function nextPage(prevPage) {
    setPage(prevPage + 1);
  }
  function previousPage(prevPage) {
    setPage(prevPage - 1);
  }

  function onSearch(){
    fetchMovies(search)
  }

  async function fetchMovies() {
    setLoading(true);
    const {
      data: { Search },
    } = await axios.get(
      `http://www.omdbapi.com/?apikey=eba677f5&s=${search}&page=${page}`
    );
    setMovies(Search);
    setLoading(false);
  }

  useEffect(() => {
    fetchMovies();
  }, [page]);

  useEffect(() => {
    const filteredMovies = movies.filter(movie => movie.Type === "movie" && movie.Poster !== "N/A")
    setOnlyMovies(filteredMovies)
    console.log(filteredMovies)
  }, [movies]);

  return (
    <>
      <Nav />
      <div className="row ">
        <h2 className="text--purple">Browse Movie</h2>
        <div className="input__wrapper--results">
          <input
            type="text"
            placeholder="Search by Title"
            className="home__input"
            onChange={(event) => setSearch(event.target.value)}
          />
          <Link to={`/search/:${search}`}>
            <div className="searchbutton" onClick={onSearch}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </div>
          </Link>
        </div>
        <div className="results__nav">
        <h4>Search Results</h4>
        <div className="pages__wrapper">
        <button onClick={() => previousPage(page)}>Previous</button>
        <div className="small">{page - 1}</div>
        <div className="current">{page}</div>
        <div className="small">{page + 1}</div>
        
        
        <button onClick={() => nextPage(page)}>Next</button>
        </div>
        <h4>Filter</h4>
        </div>
        <div className="results__row">
          {loading ? (
            <div>loading</div>
          ) : (
            onlyMovies.map((movie) => (
              <Link
                to={`/${movie.imdbID}`}
                key={movie.imdbID}
                className="movie__container"
              >
                <img src={movie.Poster} alt="" className="movie__poster" />
                <div className="movie__title">{movie.Title}</div>
              </Link>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default Results;
