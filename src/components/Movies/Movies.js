import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesList from '../MoviesList/MoviesList';


function Movies (props) {
  return (
    <section className="movies">
      <SearchForm />
      <MoviesList isSaved={false}/>
      <button className="movies__btn-more">
        Ещё
      </button>
    </section>
  )
}

export default Movies;
