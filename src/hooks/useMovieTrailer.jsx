import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../util/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../util/constants";

const useMovieTrailer=(movieId)=>{

    const dispatch=useDispatch();//call the slice reducer function

        //fetch trailer video
        const getMoviesVideos=async () =>{
            const data=await fetch("https://api.themoviedb.org/3/movie/" + movieId + "/videos?language=en-US", API_OPTIONS);
            const json=await data.json();
            //console.log(json);
            const filterData=json.results.filter((video)=> video.type==="Trailer")
            const trailer=filterData.length ? filterData[0] : json.results[0]
            //console.log(trailer)
            dispatch(addTrailerVideo(trailer))//calling reducer function
        }

        useEffect(()=>{
            getMoviesVideos()
        },[]);

}

export default useMovieTrailer;