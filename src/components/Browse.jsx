import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";

const Browse=()=>{
      
    useNowPlayingMovies();
    usePopularMovies();
    useTopRatedMovies();

    return(
        <>
        <Header/>
        <MainContainer/>
        <SecondaryContainer/>
        </>
    )
}

export default Browse;