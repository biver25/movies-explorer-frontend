import React, { useEffect } from 'react';
import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesList from '../MoviesList/MoviesList';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Preloader from '../Preloader/Preloader';
//import useLocalStorage from 'react-use-localstorage';
//import { config } from '../../utils/config';
import {searchMovies} from '../../utils/searchMovies';
import localStore from '../../utils/LocalStore';
import helper from '../../utils/helper';

/*function Movies ({ isDesktop, isMobile, isLoggedIn, isLoading, movies, columnsQuantity }) {
  // стейт массив для отрисованных фильмов
  const [moviesDisplayed, setMoviesDisplayed] = React.useState([]);
  // стейт число - номер последнего отрисованного фильма
  const [indexLastMovieId, setindexLastMovieId] = React.useState(0);
  // стейт массив для результатов поиска фильмов
  const [searchResult, setSearchResult] = React.useState([]);
  // стейт строка для последнего искомого слова
  const [lastSearch, setLastSearch] = React.useState(localStorage.getItem('lastSearch'));
  // стейт булеан - состояние чекбокса короткометражки
  const [checkboxStatus , setCheckboxStatus] = React.useState(localStorage.getItem('checkboxStatus') ? JSON.parse(localStorage.getItem('checkboxStatus')) : false);

  // скрыть кнопку "еще" , когда все фильмы отрисованы

  // функция задает массив для первого отображения фильмов
  const displayDefaultView = () => {
    setMoviesDisplayed([]);
    // в зависимости от количества фильмов в строке заполнняем массив для отображения первой
    // строки найденных фильмов searchResult
    for ( let i = 0; i < columnsQuantity && i < searchResult.length; i++ ) {
      //если текущий номер равен последнему номеру в массиве, скрываю кнопку "еще"
      if (i === searchResult.length - 1) { hideButton(); }
      setMoviesDisplayed(arr => [...arr, searchResult[i]]);
    }
    // сохраняю номер последнего отображенного элемента массива searchResult
    setindexLastMovieId(indexLastMovieId + columnsQuantity);
  }
  // при первой отрисовке
  React.useEffect(() => {
    // если массив найденных фильмов пустой и в локальном хранилище есть массив найденных фильмов,
    // в массив найденных фильмов заполняется фильмами из локального хранилища
    // для того, чтобы при перезагрузке страницы результаты последнего поиска сохранились на странице
    if (searchResult.length === 0 && localStorage.getItem('filteredMovies')) {
      setSearchResult(JSON.parse(localStorage.getItem('filteredMovies')));
      //console.log('data from localStorage')
    }
    //if (localStorage.getItem('lastSearch')) {
    //  setLastSearch()
    //}
  }, [])

  React.useEffect(() => {
    console.log('found Array', searchResult);
    localStorage.setItem('filteredMovies', JSON.stringify(searchResult));
    displayDefaultView();
    if (searchResult.length > columnsQuantity) { showButton(); }
    else { hideButton(); }
    console.log('columns', columnsQuantity, 'searchResult.length', searchResult.length)
  }, [searchResult])


  const addOneDisplayedRow = () => {
    for ( let i = indexLastMovieId; i < indexLastMovieId + columnsQuantity && i < searchResult.length; i++ ) {
      if (i === searchResult.length - 1) { hideButton(); }
      setMoviesDisplayed(arr => [...arr, searchResult[i]]);

    }
    setindexLastMovieId(indexLastMovieId + columnsQuantity);
  }

  const defineShortMovie = ( duration ) => {
    //console.log(duration <= 40);
    return duration <= 40;
  }

  const searchMovies = (searchWord) => {
    const searchWordLowerCase = searchWord.toLowerCase();

    setSearchResult(
      movies.filter((movie) => {
        console.log('movie', movie, 'checkboxStatus', checkboxStatus)
        const filterShort = (checkboxStatus && !defineShortMovie(movie.duration) ? false : true);
        if (
          (movie.nameRU + movie.nameEN + movie.description)
          .toLowerCase()
          .includes(searchWordLowerCase)
          &&
          filterShort
        ) {
          return true;
        } else {
          return false;
        }
      })
    );
    localStorage.setItem('lastSearch', searchWord);
  }

  const toggleCheckbox = () => {
    console.log('checkboxStatus before', checkboxStatus)
    setCheckboxStatus(!checkboxStatus)
    localStorage.setItem('checkboxStatus', !checkboxStatus);
    if (checkboxStatus) {
      searchMovies(lastSearch);
    } else  {
      setSearchResult(
        searchResult.filter((movie) => {
          return (!checkboxStatus && !defineShortMovie(movie.duration) ? false : true);
        })
      )
    }

  }*/

function Movies ({ isMobile, isDesktop, isLoggedIn, isLoading, columnsQuantity }) {
  const [checkboxStatus, setCheckboxStatus] = React.useState(helper.getCheckboxLocalStorage('movies-checkbox'));
  const [moviesFound, setMoviesFound] = React.useState(helper.getMoviesFoundLocalStorage('movies-found'));
  const [searchWord, setSearchWord] = React.useState(helper.getSearchWordLocalStorage('movies-lastSearch'));
  const [lastDisplayedMovie, setLastDisplayedMovie] = React.useState(0);
  const [displayedMovies, setDisplayedMovies] = React.useState([]);

  const hideButton = () => {
    document.querySelector('.movies__btn-more').classList.add('movies_btn-more_hide');
  }

  // показать кнопку "еще"
  const showButton = () => {
    document.querySelector('.movies__btn-more').classList.remove('movies_btn-more_hide');
  }

  const renderFirstRow = () => {
    const firstRowArray = [];
    //if (moviesFound.lenght > 0) {
      for (let i = 0; i < columnsQuantity && i < moviesFound.length; i++) {
        if (i === moviesFound.length - 1) {
          hideButton();
          //скрыть кнопку еще
        }
        else {showButton()}
        setLastDisplayedMovie(i);
        firstRowArray.push(moviesFound[i]);
      }
      //console.log('moviesFound', moviesFound);
      //console.log('firstRowArray', firstRowArray);
      //console.log('columnsQuantity', columnsQuantity);
      return firstRowArray;
    //}
    //else { return []; }
  }

  const handleSearch = (word) => {
    setLastDisplayedMovie(0);
    setSearchWord(word);
    setMoviesFound(searchMovies(word, checkboxStatus, 'movies-initial'))
    addOneResultRow();
  }

  const toggleCheckbox = () => {

    setCheckboxStatus(!checkboxStatus);
    localStore.setItem('movies-checkbox', !checkboxStatus)
    setMoviesFound(searchMovies(searchWord, !checkboxStatus, 'movies-initial'))
    addOneResultRow();
  }

  const addOneResultRow = () => {
    let index = lastDisplayedMovie;
    if (lastDisplayedMovie > 0) { index = lastDisplayedMovie +1}
    for (let i = index; i < index + columnsQuantity && i < moviesFound.length; i++) {
      if (i === moviesFound.length - 1) {
        //скрыть кнопку еще
        hideButton();
      }
      else {showButton()}
      setLastDisplayedMovie(i);
      //console.log('lastDisplayedMovie', lastDisplayedMovie);
      setDisplayedMovies(arr => [...arr, moviesFound[i]]);
    }
  }

  useEffect(() => {
    setDisplayedMovies(renderFirstRow());
    console.log('***')
  }, [moviesFound, columnsQuantity]);

  //useEffect(() => {
  //  setDisplayedMovies(renderFirstRow());
  //}, []);

  return (
    <>
      <Header isDesktop={isDesktop} isLoggedIn={isLoggedIn} />
      <section className="movies">
        <SearchForm
          isMobile={isMobile}
          onSearch={handleSearch}

          checkboxStatus={checkboxStatus}
          onChange={toggleCheckbox}
        />
        {isLoading ? <Preloader /> : <MoviesList isSaved={false} movies={displayedMovies} />}
        <button className="movies__btn-more movies_btn-more_hide" onClick={addOneResultRow}>
          Ещё
        </button>
      </section>
      <Footer />
    </>
  )
}

export default Movies;

/*
lastSearch={lastSearch}
movies={moviesDisplayed}
onClick={addOneResultRow}
movies_btn-more_hide
*/
