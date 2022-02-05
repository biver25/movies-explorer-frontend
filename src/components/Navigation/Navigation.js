import { Link } from 'react-router-dom';
import './Navigation.css';

function Navigation({ isDesktop, isOpen, onClose, isLoggedIn }) {
  return (
    <section className={isDesktop && isLoggedIn ? "menu_type_desktop" : (isOpen ? "menu menu_opened" : "menu")}>
      <nav className="menu__nav">
        <ul className={isDesktop ? "menu__list_type_desktop" : "menu__list"}>
          <li className={isDesktop ? "menu__list-item_type_hide" : "menu__list-item"}>
            <Link to="/" className="menu__link">Главная</Link>
          </li>
          <li className={isDesktop ? "menu__list-item_type_desktop" : "menu__list-item"}>
            <Link to="/movies" className={isDesktop ? "menu__link_type_desktop" : "menu__link"}>Фильмы</Link>
          </li>
          <li className={isDesktop ? "menu__list-item_type_desktop" : "menu__list-item"}>
            <Link to="/saved-movies" className={isDesktop ? "menu__link_type_desktop" : "menu__link"}>Сохранённые фильмы</Link>
          </li>
        </ul>
      </nav>
      {isDesktop ? "" : <button className="menu__btn-close" onClick={onClose} />}
      <Link to="/profile" className="menu__account">
        <div className="menu__account-logo"></div>
        <p className="menu__acount-text">Аккаунт</p>
      </Link>
    </section>
  );
}

export default Navigation;
