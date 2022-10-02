import React, { useState } from "react";
import Nav from "../components/Nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import IMG from "../assets/undraw_movie_night_re_9umk.svg";
import { Link } from "react-router-dom";

export default function Home ()  {
  const [searchString, setSearchString]= useState("")
  return (
    <>
      <Nav />
      <div className="row home__row">
        <h1 className="text--purple">
          Germany's most aworded Film finding platform
        </h1>
        <h3>
          FIND YOUR FAVOURITE FILM WITH{" "}
          <span className="text--purple">MOVIEFINDER</span>
        </h3>
        <div className="input__wrapper">
          <input
            type="text"
            placeholder="Search by Title"
            className="home__input"
            value={searchString}
            onChange={(event) => setSearchString(event.target.value)}/>
            <Link to={`/search/:${searchString}`}>
          <div className="searchbutton">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </div>
          </Link>
        </div>
        <figure className="home__img--wrapper">
          <img src={IMG} alt="" className="home__img" />
        </figure>
      </div>
    </>
  );
}
