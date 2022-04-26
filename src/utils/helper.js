import {config} from './config';
import localStore from './LocalStore';

class Helper {

// опртеделяет короткий фильм
  checkShort ( duration ) {
    return duration <= config.SHORT_MOVIE_DURATION ? true : false;
  }
// переводит минуты в часы и минуты
  convertDuration ( minutes ) {
    return Math.floor( minutes / 60) > 0
      ?
      `${Math.floor(minutes / 60)}ч ${minutes % 60}м`
      :
      `${minutes % 60}м`;
  }
// определяет положение чекбокса
  getCheckboxLocalStorage = (key) => {
    return localStore.getItem(key) ? true : false
  }

  getMoviesFoundLocalStorage = (key) => {
    return localStore.getItem(key) ? localStore.getItem(key) : []
  }

  getSearchWordLocalStorage = (key) => {
    return localStore.getItem(key) ? localStore.getItem(key) : ''
  }

}

const helper = new Helper();

export default helper;
