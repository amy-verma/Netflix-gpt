import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer=()=>{
    const movies=useSelector(store=>store.movies)
    return(
        <div className="bg-black">
            <div className="-mt-40 relative pl-16 z-26">
            <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
            <MovieList title={"Trending"} movies={movies.nowPlayingMovies}/>
            <MovieList title={"Popular"} movies={movies.popular}/>
            <MovieList title={"Top Rated Movies"} movies={movies.topRatedMovies}/>
            <MovieList title={"Horror Movies"} movies={movies.nowPlayingMovies}/>
            </div>
    </div>
    )
}

export default SecondaryContainer;


// Movie List -Popular
//  Movie Crad *n
// Movie List - Now Playing 
// Movie List- Trending 
// Movie List - Horror  