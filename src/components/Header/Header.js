import './Header.css'

function Header(props) {
  return (
    <div className="header">
      <div className="header__logo">
      </div>
      <div className="header__container">
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
        <div className="header__menu"></div>
      </div>
    </div>
  )
}

export default Header;
