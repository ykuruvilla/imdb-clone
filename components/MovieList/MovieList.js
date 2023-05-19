import MovieListItem from "../MovieListItem/MovieListItem";

const MovieList = ({ movies }) => {
  return (
    <div>
      {movies.map((movie) => (
        <MovieListItem key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;
