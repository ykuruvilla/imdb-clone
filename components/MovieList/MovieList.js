import MovieListItem from "../MovieListItem/MovieListItem";

const MovieList = ({ movies }) => {
  return (
    <section className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-6xl mx-auto py-4">
      {movies.map((movie) => (
        <MovieListItem key={movie.id} movie={movie} />
      ))}
    </section>
  );
};

export default MovieList;
