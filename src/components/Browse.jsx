import { useEffect } from "react";
import { API_OPTIONS } from "../util/constants"
import Header from "./Header"
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../util/movieSlice";

const Browse=()=>{
      
    const dispatch=useDispatch()

    const getNowPlayingMovies = 
    async()=>{
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?&page=1', API_OPTIONS);

        const json= await data.json()
        console.log(json.results)
        //add json.results into movieslice
        dispatch(addNowPlayingMovies(json.results))
    };

    useEffect(()=>{
        getNowPlayingMovies();
    },[])




    return(
        <Header/>
    )
}

export default Browse