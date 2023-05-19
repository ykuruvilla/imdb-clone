import MovieList from "@/components/MovieList/MovieList";
import { getMoviesBySearchTerm } from "@/utils/api";

const SearchPage = async ({ params }) => {
  const searchTerm = params.searchTerm;
  const searchResults = await getMoviesBySearchTerm(searchTerm);
  console.log(searchResults);

  return (
    <div>
      {searchResults && searchResults.length === 0 && (
        <h2 className="text-center pt-6">No results found</h2>
      )}
      {searchResults && <MovieList movies={searchResults} />}
    </div>
  );
};

export default SearchPage;
