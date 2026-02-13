import Link from "next/link";

type MovieCardProps = {
  movie: {
    id: number;
    title: string;
    poster_path: string | null;
    release_date: string;
    vote_average: number;
  };
};

export default function MovieCard({ movie }: MovieCardProps) {
  return (
    <div className="w-48 rounded-lg border border-gray-200 bg-white p-3 shadow-sm">
      {movie.poster_path ? (
        <img
          src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
          alt={movie.title}
          className="mb-2 h-72 w-full rounded-md object-cover"
        />
      ) : (
        <div >
          No Image
        </div>
      )}

      <Link href={`http://localhost:3000/movie/${movie.id}`}>
        <h3 className="cursor-pointer truncate text-sm font-semibold text-blue-600 hover:underline">
          {movie.title}
        </h3>
      </Link>

      <p className="mt-1 text-xs text-gray-600">
        {movie.release_date}
      </p>
    </div>
  );
}
