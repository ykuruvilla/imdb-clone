import MovieList from "@/components/MovieList/MovieList";

const API_KEY = process.env.API_KEY;

const HomePage = async ({ searchParams }) => {
  const genre = searchParams.genre || "trending";

  const res = await fetch(
    `https://api.themoviedb.org/3/${
      genre === "topRated" ? "movie/top_rated" : "trending/all/week"
    }?api_key=${API_KEY}&language=en-US&page=1`,
    { next: { revalidate: 3600 } }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  const results = data.results;
  console.log(results);

  return (
    <div>
      <MovieList movies={results} />
    </div>
  );
};

export default HomePage;
