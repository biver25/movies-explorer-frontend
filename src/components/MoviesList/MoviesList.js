import './MoviesList.css';
import MoviesListItem from '../MoviesListItem/MoviesListItem';
import { movies } from '../../utils/movies';
const savedMovies = [];

movies.forEach ((movie) => {
  if (movie.saved) {savedMovies.push(movie)}
  }
)
console.log(savedMovies);


function MoviesList ({ isSaved }) {
  return (
    <section className="movies-list">
      { isSaved
        ? savedMovies.map((movie) =>
        <MoviesListItem isSaved={isSaved} movie={movie} key={movie.name}/>
        )
        : movies.map((movie) =>
        <MoviesListItem isSaved={isSaved} movie={movie} key={movie.name}/>
        )
      }
    </section>
  )
}

export default MoviesList;
