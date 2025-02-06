import { BG_URL } from "../util/constants";
import GptMovieSeggestion from "./GptMovieSuggestion";
import GptSearchBar from "./GptSearchBar";

const GptSearch = () => {
    return (
        <div>
            <div className="absolute h-screen -z-10">
                <img
                    alt="logo"
                    src={BG_URL}
                />
            </div>
            <GptSearchBar />
            <GptMovieSeggestion />
        </div>
    );
};

export default GptSearch;
