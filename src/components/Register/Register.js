import { Link } from 'react-router-dom';
import './Register.css';

function Register (props) {
  return (
    <section className="register">
      <form className="form">
        <div className="form__title-container">
          <div className="form__title-logo"></div>
          <h1 className="form__title">Добро пожаловать!</h1>
        </div>
        <label className="form__label">Имя</label>
        <input
        className="form__input form__input_type_name"
        type="text"
        required
        minLength="2"
        maxLength="30"
        />
        <span className="form__input-error form__input_name-error"></span>
        <label className="form__label">E-mail</label>
        <input
        className="form__input form__input_type_email"
        type="email"
        required
        />
        <span className="form__input-error form__input_email-error form__input-error_visible">
          Что-то пошло не так...
        </span>
        <label className="form__label">Пароль</label>
        <input
        className="form__input form__input_type_password form__input_errored"
        type="password"
        required
        />
        <span className="form__input-error form__input_password-error form__input-error_visible">
          Что-то пошло не так...
        </span>
        <button type="submit" className="form__btn">Зарегистрироваться</button>
        <p className="form__bottom-text">Уже зарегестрированы?
          <Link to="/signin" className="form__bottom-link">Войти</Link>
        </p>
      </form>
    </section>
  );
};

export default Register;
