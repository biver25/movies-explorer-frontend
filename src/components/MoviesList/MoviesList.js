import './MoviesList.css';
import MoviesListItem from '../MoviesListItem/MoviesListItem';

function MoviesList ({ isSaved, isMobile, movies }) {
  return (
    <section className="movies-list">
      { isSaved
        ? movies.map((movie) =>
        <MoviesListItem isSaved={isSaved} isMobile={isMobile} movie={movie} key={movie.id}/>
        )
        : movies.map((movie) =>
        <MoviesListItem isSaved={isSaved} movie={movie} key={movie.id} />
        )
      }
    </section>
  )
}

export default MoviesList;
