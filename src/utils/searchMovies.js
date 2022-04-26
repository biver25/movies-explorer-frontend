import localStore from "./LocalStore"
import helper from "./helper";

export const searchMovies = (searchWord, checkboxStatus, key) => {
  const searchWordLowerCase = searchWord.toLowerCase();
  const moviesFound = localStore.getItem(key).filter((movie) => {
    const filterShort = checkboxStatus && !helper.checkShort(movie.duration) ? false : true

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
  console.log('foundArray length', moviesFound.length);
  localStore.setItem('movies-found', moviesFound);
  localStore.setItem('movies-lastSearch', searchWord);
  return moviesFound;
}
