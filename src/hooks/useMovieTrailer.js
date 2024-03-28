/* eslint-disable react-hooks/exhaustive-deps */
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addMovieTrailer } from "../utils/movieSlice";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  const getMovieTrailer = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_OPTIONS
    );
    const data = await response.json();
    // console.log(data);

    const filterData = data.results.filter((video) => video.type === "Trailer");
    const trailer = filterData[0] ? filterData[0] : data.results[0];
    dispatch(addMovieTrailer(trailer));
    // setTrailerId(trailer.key);
    console.log(trailer);
  };

  useEffect(() => {
    getMovieTrailer();
  }, []);
};

export default useMovieTrailer;
