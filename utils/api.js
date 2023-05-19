const API_KEY = process.env.API_KEY;
const API_URL = process.env.API_URL;

export const getMovieById = async (movieId) => {
  const res = await fetch(`${API_URL}/movie/${movieId}?api_key=${API_KEY}`);
  const movie = await res.json();
  return movie;
};

export const getHomePageMovies = async (genre) => {
  const res = await fetch(
    `${API_URL}/${
      genre === "topRated" ? "movie/top_rated" : "trending/all/week"
    }?api_key=${API_KEY}&language=en-US&page=1`,
    { next: { revalidate: 3600 } }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  const movies = data.results;
  return movies;
};

export const getMoviesBySearchTerm = async (searchTerm) => {
  const res = await fetch(
    `${API_URL}/search/movie?api_key=${API_KEY}&query=${searchTerm}&language=en-US&include_adult=false`
  );
  if (!res.ok) {
    throw new Error("Error fetching data");
  }
  const data = await res.json();
  const searchResults = data.results;
  return searchResults;
};
