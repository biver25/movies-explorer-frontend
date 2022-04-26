import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import './App.css';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Register from '../Register/Register';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import Navi from '../Navigation/Navigation';
import Preloader from '../Preloader/Preloader';
//import { info } from '../../utils/info';
import { config } from '../../utils/config';
import moviesApi from '../../utils/MoviesApi';
import localStore from '../../utils/LocalStore';
import mainApi from '../../utils/MainApi';
import {CurrentUserContext} from '../../contexts/CurrentUserContext';


function App() {

  const [ columnsQuantity, setColumnsQuantity ] = React.useState(0);
  // хук для состояния ширины окна
  const [isWindowWidth, setIsWindowWidth] = React.useState(window.innerWidth);
  // хук для состояния пользователя, залогинен или нет
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  // хук для состояния прелоадера
  const [isLoading, setIsLoading] = React.useState(false);
  // хук для переменной содержащей массив фильмов из Beatfilm
  //const [ movies, setMovies ] = React.useState([]);
  const navigate = useNavigate();
  //const [ item, setItem ] = useLocalStorage('movies', [])
  //localStorage.setItem('movies', []);
  const [currentUser, setCurrentUser] = React.useState({});

  const isMobile = isWindowWidth < config.MAX_MOBILE_SCREEN;
  const isDesktop = isWindowWidth > config.MIN_DESKTOP_SCREEN;

  const definecolumnQuantity = () => {
    if (window.innerWidth < 630) {
      setColumnsQuantity(5);
    } else if (window.innerWidth < 930 && window.innerWidth >= 630) {
      setColumnsQuantity(2);
    } else if (window.innerWidth < 1230 && window.innerWidth >= 930) {
      setColumnsQuantity(3);
    } else if (window.innerWidth >= 1230 ) {
      setColumnsQuantity(4);
    }
  }

  React.useEffect(() => {
    definecolumnQuantity();
    getSavedMovies();
    getInitialMovies();
    if (localStore.getItem('token')) {
      mainApi.getUserInfo()
      .then((res) => {
        if (res.name) {
          setCurrentUser(res);
          setIsLoggedIn(true);
          console.log('token OK');
        }
    })
    .catch((err) => console.log('getUserInfo ', err));
    }
  }, [])

  React.useEffect(() => {
    let timer;
    const windowSizeListener = () => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        setIsWindowWidth(window.innerWidth);
        definecolumnQuantity();
      }, 1000)
    }
    window.addEventListener('resize', windowSizeListener);
  } );

  React.useEffect(() => {
    mainApi.getUserInfo()
    .then((res) => {
      setCurrentUser(res);
    })
    .catch((err) => console.log('getUserInfo ', err));
  }, [isLoggedIn]);

  const getSavedMovies = () => {
    setIsLoading(true);
    mainApi.getSavedMovies()
    .then((res) => {
      localStore.setItem('movies-saved', res)
      console.log('saved-movies', res);
    })
    .then(() => {setIsLoading(false)})
    .catch((err) => console.log('getSavedMovies', err))

  }

  const getInitialMovies = () => {
    if (localStore.getItem('movies-initial')) {
      //setMovies(localStore.getItem('movies-initial'));
    }
    else {
      setIsLoading(true);
      moviesApi.getMovies()
      .then((res) => {
        //setMovies(res);
        localStore.setItem('movies-initial', res)
      })
      .then(() => {setIsLoading(false)})
      .catch((err) => console.log('getMovies ', err));
    }
  }

  const handleLogin = (values) => {
    mainApi.login(values.email, values.password)
    .then((data) => {
      /*mainApi.getUserInfo()
      .then((data) => {
        setCurrentUser({
          email: data.email,
          name: data.name,
          id: data._id
        });
        setIsLoggedIn(true);
        navigate('/movies');
        localStore.setItem('token ', data.token);
      })
      .catch((err) => {
        console.log('login ', err)
      })*/
      if (data.token) {
        localStore.setItem('token', data.token);
        navigate('/movies');
        console.log(data.token);
        setCurrentUser({
          email: data.email,
          name: data.name,
          id: data._id
        });
        setIsLoggedIn(true);
      }
    })
    .catch((err) => {
      console.log('login', err);
    })
  }

  const handleRegister = (values) => {
    mainApi.register(values.name, values.email, values.password)
    .then((res) => {
      console.log('register succeed', res.data);
      handleLogin(values);
    })
    .catch((err) => {
      console.log('register error ', err);
    })
  }

  const handleProfileChange = (values) => {
    mainApi.updateUserInfo(values)
    .then((data) => {
      console.log('change! data:', data);
      setCurrentUser({
        email: values.email,
        name: values.name
      })
    })
    .catch((err) => {
      console.log('profile change ', err)
    })

  }

  const handleLogout = (values) => {
    localStore.removeItem('token');
    localStore.removeItem('movies-found');
    localStore.removeItem('movies-lastSearch');
    setIsLoggedIn(false);
    console.log('logout');
    navigate('/signin');
    setCurrentUser(null);
  }

  //console.log('currentUser', currentUser)

  return (
    <div className="page">
      <CurrentUserContext.Provider value={currentUser}>
        <Routes>
          <Route path="/"
            element={<Main
              isDesktop={isDesktop}
              isMobile={isMobile}
              isLoggedIn={isLoggedIn}
            />}
          />
          <Route path="/movies"
            element={<Movies
              isDesktop={isDesktop}
              isMobile={isMobile}
              isLoggedIn={isLoggedIn}
              isLoading={isLoading}
              columnsQuantity={columnsQuantity}
            />}
          />
          <Route path="/saved-movies"
            element={<SavedMovies
              isDesktop={isDesktop}
              isMobile={isMobile}
              isLoggedIn={isLoggedIn}
              isLoading={isLoading}
              columnsQuantity={columnsQuantity}
            />}
          />
          <Route path="/signup" element={<Register onRegister={handleRegister} />} />
          <Route path="/profile"
            element={<Profile
              isDesktop={isDesktop}
              isLoggedIn={isLoggedIn}
              onProfileChange={handleProfileChange}
              onLogout={handleLogout}
            />}
          />
          <Route path="/signin" element={<Login onLogin={handleLogin}/>} />
          <Route path="/*" element={<NotFoundPage />} />
          <Route path="/navi" element={<Navi isDesktop={isDesktop}/>} />
          <Route path="/preloader" element={<Preloader />} />
        </Routes>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
