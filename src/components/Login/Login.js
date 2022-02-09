import { Link } from 'react-router-dom';
import './Login.css';

function Login (props) {
  return (
    <section className="login">
      <form className="form">
        <div className="form__title-container">
          <div className="form__title-logo"></div>
          <h1 className="form__title">Рады видеть!</h1>
        </div>
        <label className="form__label">E-mail</label>
        <input className="form__input form__input_type_email" type="email" required />
        <span className="form__input-error form__input_email-error form__input-error_visible">Что-то пошло не так...</span>
        <label className="form__label">Пароль</label>
        <input className="form__input form__input_type_password form__input_errored" type="password" required />
        <span className="form__input-error form__input_password-error form__input-error_visible">Что-то пошло не так...</span>
        <button type="submit" className="form__btn form__btn_signin">Войти</button>
        <p className="form__bottom-text">Ещё не зарегистрированы?
          <Link to="/signup" className="form__bottom-link">Регистрация</Link>
        </p>
      </form>
    </section>
  );
};

export default Login;
