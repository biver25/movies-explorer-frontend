class LocalStore {

  setItem = (key, item) => {
    localStorage.setItem(key, JSON.stringify(item));
  }

  getItem = (key) => {
    return JSON.parse(localStorage.getItem(key));
  }

  removeItem = (key) => {
    localStorage.removeItem(key);
  }

  clearLocalStorage = () => {
    localStorage.clear()
  }

/*  getLocalItem = ( key ) => {
    localStorage.getItem(key);
  }

  setLocalItem = ( item , key ) => {
    localStorage.setItem(key, JSON.stringify(item));
  }

  setMovies = ( movies  ) => {
    localStorage.setItem('movies', JSON.stringify(movies));
  }

  getMovies = ( name ) => {
    JSON.parse(localStorage.setItem(name));
  }

  setMovies = ( movies , name ) => {
    localStorage.setItem(name, JSON.stringify(movies));
  }

  getMovies = ( name ) => {
    JSON.parse(localStorage.setItem(name));
  }

  defineMoviesCheckboxStatus = () => {
    return ( this.getMoviesCheckboxStatus() ? true : false )
  }

  setMoviesCheckboxStatus = (status) => {
    localStorage.setItem('Movies Checkbox', JSON.stringify(status));
  }

  getMoviesCheckboxStatus = () => {
    JSON.parse(localStorage.getItem('Movies Checkbox'));
  }*/

}

const localStore = new LocalStore();

export default localStore;
