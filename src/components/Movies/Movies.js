import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesList from '../MoviesList/MoviesList';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Preloader from '../Preloader/Preloader';

function Movies ({ isDesktop, isMobile, isLoggedIn, isLoading }) {
  return (
    <>
      <Header isDesktop={isDesktop} isLoggedIn={isLoggedIn} />
      <section className="movies">
        <SearchForm isMobile={isMobile} />
        {isLoading ? <Preloader /> : <MoviesList isSaved={false}/>}
        <button className="movies__btn-more">
          Ещё
        </button>
      </section>
      <Footer />
    </>
  )
}

export default Movies;
