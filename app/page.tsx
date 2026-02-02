
import Seachbox from "./component/searchBox";

type Movie = {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
};

export default async function MoviesPage() {
  const res = await fetch(
    "http://localhost:3000/api/v1/movies/listMovies",
    { cache: "no-store" }
  );

  const data = await res.json();

  // ✅ FIXED LINE (important)
  const movies: Movie[] = data?.data?.results ?? [];

  return (
    
    <main style={{ padding: "20px" }}>
      <Seachbox></Seachbox>
      <h1>Movies</h1>

      {movies.length === 0 && <p>No movies found</p>}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "20px",
        }}
      >
        {movies.map((movie) => (
          <div
            key={movie.id}
            style={{
              border: "1px solid #ddd",
              padding: "10px",
              borderRadius: "8px",
            }}
          >
            <img
              src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
              alt={movie.title}
              style={{ width: "100%", borderRadius: "6px" }}
            />

            <h3>{movie.title}</h3>
            <p>⭐ {movie.vote_average}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
