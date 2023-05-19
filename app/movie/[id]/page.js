import { getMovieById } from "@/utils/api";
import Image from "next/image";

const MoviePage = async ({ params }) => {
  const movieId = params.id;
  const movie = await getMovieById(movieId);
  console.log(movie);
  return (
    <div className="w-full">
      <div className="p-4 md-pt-8 flex flex-col md:flex-row items-center content-center max-w-6xl mx-auto md:space-x-6">
        <Image
          src={`https://image.tmdb.org/t/p/original/${
            movie.backdrop_path || movie.poster_path
          }`}
          alt={movie.title || movie.name}
          width={500}
          height={300}
          className="rounded-lg"
          placeholder="blur"
          blurDataURL="/loader.svg"
          style={{ maxWidth: "100%", height: "100%" }}
        />
        <div className="p-2">
          <h2 className="text-lg mb-3 font-bold">
            {movie.title || movie.name}
          </h2>
          <p className="text-lg mb-3">
            <span className="font-semibold mr-1">Overview:</span>
            {movie.overview}
          </p>
          <p className="mb-3">
            <span className="font-semibold mr-1">Date Released:</span>
            {movie.release_date || movie.first_air_date}
          </p>
          <p className="mb-3">
            <span className="font-semibold mr-1">Rating:</span>
            {movie.vote_average}
          </p>
          {movie.homepage && (
            <a
              href={movie.homepage}
              target="_blank"
              className="mb-3 font-semibold underline bg-amber-500 p-2 rounded-md text-white "
            >
              Go to Official Website
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default MoviePage;
