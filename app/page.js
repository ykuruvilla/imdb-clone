import MovieList from "@/components/MovieList/MovieList";
import { getHomePageMovies } from "@/utils/api";

const HomePage = async ({ searchParams }) => {
  const genre = searchParams.genre || "trending";

  const movies = await getHomePageMovies(genre);

  return (
    <div>
      <MovieList movies={movies} />
    </div>
  );
};

export default HomePage;
