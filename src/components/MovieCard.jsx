import { IMG_CDN_URL } from "../util/constants";

const MovieCard=({ posterPath })=>{
    return(
        <div className="w-48 pr-3">
            <img alt="Movie Card" src={IMG_CDN_URL + posterPath}/>
        </div>
    )
}

export default MovieCard; 