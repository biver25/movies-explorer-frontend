import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesList from '../MoviesList/MoviesList';


function SavedMovies (props) {
  return (
    <section className="movies">
      <SearchForm />
      <MoviesList isSaved={true}/>
      <button className="movies__btn-more">
        Ещё
      </button>
    </section>
  )
}

export default SavedMovies;
