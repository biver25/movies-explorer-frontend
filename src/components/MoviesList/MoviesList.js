import './MoviesList.css';
import MoviesListItem from '../MoviesListItem/MoviesListItem';
import { movies } from '../../utils/movies';



function MoviesList ({ isSaved }) {
  return (
    <section className="movies-list">
      {
        movies.map((movie) =>
          <MoviesListItem isSaved={isSaved} movie={movie} key={movie.name}/>
        )
      }
    </section>
  )
}

export default MoviesList;
