import React from 'react';
import { Routes, Route } from 'react-router-dom';
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
import { info } from '../../utils/info';
import { config } from '../../utils/config';


function App() {

  const [isWindowWidth, setIsWindowWidth] = React.useState(window.innerWidth);
  const isMobile = isWindowWidth < config.MAX_MOBILE_SCREEN;
  const isDesktop = isWindowWidth > 1000;
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {

    const windowSizeListener = () => {
      /*540<800*/
      setIsWindowWidth(window.innerWidth);
    }
    window.addEventListener('resize', windowSizeListener);
  } );

  return (
    <div className="page">
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
          />}
        />
        <Route path="/saved-movies"
          element={<SavedMovies
            isDesktop={isDesktop}
            isMobile={isMobile}
            isLoggedIn={isLoggedIn}
            isLoading={isLoading}
          />}
        />
        <Route path="/signup" element={<Register />} />
        <Route path="/profile"
          element={<Profile
            userName={info.name}
            userEmail={info.email}
            isDesktop={isDesktop}
            isMobile={isMobile}
            isLoggedIn={isLoggedIn}
          />}
        />
        <Route path="/signin" element={<Login />} />
        <Route path="/*" element={<NotFoundPage />} />
        <Route path="/navi" element={<Navi isDesktop={isDesktop}/>} />
        <Route path="/preloader" element={<Preloader />} />
      </Routes>
    </div>
  );
}

export default App;
