import Link from 'next/link'

const movies = [
  {
    id: 1,
    movie: "Lord of the Rings",
  },
  {
    id: 2,
    movie: "Star Wars",
  },
  {
    id: 3,
    movie: "Bullet train",
  },
]

export default function Layout({ children }: React.PropsWithChildren<{}>) {
  return (
    <div>
      <ul>
        {movies.map((movie => (
          <li key={movie.id}>
            <Link href={`/movies/${movie.id}`}>{movie.movie}</Link>
          </li>
        )))}
      </ul>
      <div>
        {children}
      </div>
    </div>
  );
}
