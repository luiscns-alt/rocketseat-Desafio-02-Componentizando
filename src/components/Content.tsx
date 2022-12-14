import { memo } from "react";
import "../styles/content.scss";
import { MovieCard } from "./MovieCard";

interface IGenreResponseProps {
  id: number;
  name: "action" | "comedy" | "documentary" | "drama" | "horror" | "family";
  title: string;
}

interface IMovieProps {
  Title: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Runtime: string;
}

interface ContentProps {
  selectedGenre: IGenreResponseProps;
  movies: Array<IMovieProps>;
}

function ContentComponent({ selectedGenre, movies }: ContentProps) {
  return (
    <div className="container">
      <header>
        <span className="category">
          Categoria:<span> {selectedGenre.title}</span>
        </span>
      </header>

      <main>
        <div className="movies-list">
          {movies.map((movie: IMovieProps) => (
            <MovieCard
              key={movie.Title}
              title={movie.Title}
              poster={movie.Poster}
              runtime={movie.Runtime}
              rating={movie.Ratings[0].Value}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export const Content = memo(ContentComponent, (prevProps, nextProps) => {
  return prevProps.selectedGenre === nextProps.selectedGenre;
});
