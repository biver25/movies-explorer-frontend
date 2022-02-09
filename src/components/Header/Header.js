import React from 'react';
import './Header.css';
import Navigation from '../Navigation/Navigation';

function Header({isDesktop , isLoggedIn}) {

  const [isNaviOpened, setIsNaviOpened] = React.useState(false);

  const handleNaviOpen = () => {
    setIsNaviOpened(true);
  }

  const handleCloseNavi = () => {
    setIsNaviOpened(false)
  }

  return (
    <div className="header">
      <div className="header__logo"></div>
      {/*<div className="header__container">
        {isDesktop && isLoggedIn ? <Navigation isDesktop={isDesktop} isOpen={isNaviOpened}/> : ""}
  </div>*/}
      {isLoggedIn
      ? ""
      : <div className="header__authorization">
           <button className="header__register-btn">Регистрация</button>
           <button className="header__login-btn">Войти</button>
         </div>
      }
      {isLoggedIn && !isDesktop ? <button className="header__navigation" onClick={handleNaviOpen}></button> : ""}
      <Navigation isDesktop={isDesktop} isOpen={isNaviOpened} onClose={handleCloseNavi} isLoggedIn={isLoggedIn}/>
    </div>
  );
};

export default Header;

/*
        <div className="header__movies-container">
          <button className="header__movies">Фильмы</button>
          <button className="header__movies-saved">Сохранённые фильмы</button>
        </div>
        <div className="header__account">
          <div className="header__account-logo"></div>
          <button className="header__acount-text">Аккаунт</button>
        </div>



        <div className="header__authorization">
          <button className="header__register-btn">Регистрация</button>
          <button className="header__login-btn">Войти</button>
        </div>
        <button className="header__navigation"></button>
*/
