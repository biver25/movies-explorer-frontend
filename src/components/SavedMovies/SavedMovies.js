import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesList from '../MoviesList/MoviesList';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function SavedMovies ({ isDesktop, isMobile }) {
  return (
    <>
      <Header isDesktop={isDesktop}/>
      <section className="movies movies_saved">
        <SearchForm isMobile={isMobile}/>
        <MoviesList isSaved={true}/>
      </section>
      <Footer />
    </>
  )
}

export default SavedMovies;
