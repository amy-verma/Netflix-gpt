import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../util/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../util/constants";


const useNowPlayingMovies=()=>{
    
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

    }


export default useNowPlayingMovies;
