import { config } from './config'
import localStore from './LocalStore';

class MainApi {
  constructor(options) {
    this._serverUrl = options.serverUrl;
    this._headers = options.headers;
  }

  register(name, email, password) {
    return fetch(`${this._serverUrl}/signup`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({name: name, email: email, password: password}),
    })
    .then(this._handleResponse);
  }

  login(email, password) {
    return fetch(`${this._serverUrl}/signin`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({email: email, password: password}),
    })
    .then(this._handleResponse);
  }

  getUserInfo() {
    return fetch(`${this._serverUrl}/users/me`, {
      method: 'GET',
      headers: {...this._headers, 'authorization': `Bearer ${localStore.getItem('token')}`}
    })
    .then(this._handleResponse);
  }

  updateUserInfo(data) {
    return fetch(`${this._serverUrl}/users/me`, {
      method: 'PATCH',
      headers: {...this._headers, 'authorization': `Bearer ${localStore.getItem('token')}`},
      body: JSON.stringify({
        name: data.name,
        email: data.email,
      })
    })
    .catch(this._handleResponse);
  }

  getSavedMovies() {
    return fetch(`${this._serverUrl}/movies`, {
      method: 'GET',
      headers: {...this._headers, 'authorization': `Bearer ${localStore.getItem('token')}`}
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

const mainApi = new MainApi({
  serverUrl: config.MAINAPI_BASE_URL,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  }
});

export default mainApi;
