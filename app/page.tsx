import SearchBar from "./components/SearchBox";
import MovieCard from "./components/MovieCard";

type Movie = {
  id: number;
  title: string;
  poster_path: string | null;
  release_date: string;
  vote_average: number;
};

type HomePageProps = {
  searchParams: Promise<{
    query?: string;
  }>;
};

async function getMovies(query?: string) {
  const url = query ? `http://localhost:3000/api/v1/movies/search?query=${encodeURIComponent(query)}`
    : `http://localhost:3000/api/v1/movies/listMovies`;

  const res = await fetch(url);


  const json = await res.json();
  return json.data?.results || [];
}

export default async function HomePage({ searchParams }: HomePageProps) {
  const params = await searchParams;  
  const query = params.query;

  const movies: Movie[] = await getMovies(query);

  return (
    <main className="mx-auto max-w-7xl px-4 py-8">
      <div className="mb-6">
        <SearchBar />
      </div>

      <h2 className="mb-6 text-xl font-semibold text-gray-900">
        {query ? `Search results for "${query}"` : "Popular Movies"}
      </h2>

      {movies.length === 0 && (
        <p className="text-sm text-gray-600">
          No movies found.
        </p>
      )}

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </main>
  );
}
