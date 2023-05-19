import { getMovieById } from "@/utils/api";

const MoviePage = async ({ params }) => {
  const movieId = params.id;
  const movie = await getMovieById(movieId);
  return <div>MoviePage</div>;
};

export default MoviePage;
