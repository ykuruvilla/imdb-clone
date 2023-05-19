import Image from "next/image";
import Link from "next/link";
import { FaRegThumbsUp } from "react-icons/fa";

const MovieListItem = ({ movie }) => {
  return (
    <div className="group cursor-pointer sm:p-3 sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200">
      <Link href={`/movie/${movie.id}`}>
        <Image
          src={`https://image.tmdb.org/t/p/original/${
            movie.backdrop_path || movie.poster_path
          }`}
          alt={movie.title || movie.name}
          width={500}
          height={300}
          className="sm:rounded-t-lg group-hover:opacity-80 transition-opacity duration-200"
          placeholder="blur"
          blurDataURL="/loader.svg"
          style={{ maxWidth: "100%", height: "auto" }}
        />
        <div className="p-2">
          <h3 className="truncate text-lg font-bold">
            {movie.title || movie.name}
          </h3>
          <p className="line-clamp-2 text-md ">{movie.overview} </p>
          <p className="flex items-center">
            {movie.release_date || movie.first_air_date}{" "}
            <FaRegThumbsUp className="h-5 mr-1 ml-3" />
            {movie.vote_average}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default MovieListItem;
