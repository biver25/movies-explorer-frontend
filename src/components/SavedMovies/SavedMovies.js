import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesList from '../MoviesList/MoviesList';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Preloader from '../Preloader/Preloader';
import localStore from '../../utils/LocalStore';

function SavedMovies ({ isDesktop, isMobile, isLoggedIn, isLoading }) {

  const movies = localStore.getItem('movies-saved');

  return (
    <>
      <Header isDesktop={isDesktop} isMobile={isMobile} isLoggedIn={isLoggedIn} />
      <section className="movies movies_saved">
        <SearchForm isMobile={isMobile}/>
        {isLoading ? <Preloader /> : <MoviesList isSaved={true} isMobile={isMobile} movies={movies}/>}

      </section>
      <Footer />
    </>
  )
}

export default SavedMovies;
