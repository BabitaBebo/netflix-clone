/* eslint-disable no-lone-blocks */
import React from "react";
import MovieList from "./MovieList.js";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    movies && (
      <div className=" bg-black">
        <div className="-mt-44 pl-12 relative z-20">
          <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
          <MovieList title={"Tranding"} movies={movies.nowPlayingMovies} />
          <MovieList title={"Popular"} movies={movies.popularMovies} />
          <MovieList
            title={"Upcoming Movies"}
            movies={movies.nowPlayingMovies}
          />
          <MovieList title={"Horror"} movies={movies.nowPlayingMovies} />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;

{
  /* 
  MovieList - Popular
  - MovieCards * n
  MovieList - Now playing
  MovieList - Tranding
  MovieList - Horror
  MovieList - Continue watching

*/
}
