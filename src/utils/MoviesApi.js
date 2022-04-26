import { config } from './config'

class MoviesApi {
  constructor(options) {
    this._serverUrl = options.serverUrl;
  }

  getMovies() {
    return fetch(`${this._serverUrl}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    })
    .then(this._handleResponse);
  }

  _handleResponse(res) {
    if (res.ok) {
      return res.json();
    }
    else { return Promise.reject(`Ошибка ${res.status}`);}
  }

}

const moviesApi = new MoviesApi({
  credentials: 'include',
  serverUrl: config.BEATAPI_URL,
});

export default moviesApi;
