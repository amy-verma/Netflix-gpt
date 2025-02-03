import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
    console.log("Movies", movies);

    if (!movies || movies.length === 0) return <div>No Movies</div>;
    return (
        <div className="px-6 ">
            <h1 className="text-bold text-3xl py-4 text-white">{title}</h1>

            <div className="flex overflow-x-scroll ">
                <div className="flex">
                    {movies?.map((movie) => (
                        <MovieCard
                            key={movie.id}
                            posterPath={movie.poster_path}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MovieList;
