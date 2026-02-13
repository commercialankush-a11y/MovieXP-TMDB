

type MovieDetailPageProps = {
  params: Promise<{
    id: string;
  }>;
};

async function getMovie(id: string) {
  const res = await fetch(
    `http://localhost:3000/api/v1/movies/details?id=${id}`
  );

  return res.json();
}

export default async function MovieDetailPage({
  params,
}: MovieDetailPageProps) {
  const resolvedParams = await params; 
  const movieId = resolvedParams.id;

  const movie = await getMovie(movieId);

  return (
    <div className="mx-auto max-w-5xl px-4 py-8">
      <h1 className="text-2xl font-bold">{movie.title}</h1>
      <p className="mt-2 text-sm text-gray-600">{movie.overview}</p>
    </div>
  );
}
