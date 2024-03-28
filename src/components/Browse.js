import useNowPlayingMovies from "../hooks/useNowPalyingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />

      {/* 
        MainContainer 
        -  VideoBackground
        - Video Title

        SecondaryContainer 
        -  MovieList * n
        - Cards * n
      */}
    </div>
  );
};

export default Browse;
