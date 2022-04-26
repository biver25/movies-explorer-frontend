import { Link } from 'react-router-dom';
import './Login.css';
import { useForm } from '../../utils/useForm';

function Login ({onLogin}) {

  const { values, handleChange, errors, isValid, resetForm } = useForm();

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(values);
    resetForm();
  }

  return (
    <section className="login">
      <form className="form" onSubmit={handleSubmit}>
        <div className="form__title-container">
          <div className="form__title-logo"></div>
          <h1 className="form__title">Рады видеть!</h1>
        </div>
        <label className="form__label">E-mail</label>
        <input
          className="form__input form__input_type_email"
          type="email"
          required
          name="email"
          value={values.email || ""}
          onChange={handleChange}
        />
        <span
          className="form__input-error form__input_email-error form__input-error_visible">
          {errors.email}
        </span>
        <label className="form__label">Пароль</label>
        <input
          className="form__input form__input_type_password form__input_errored"
          type="password"
          minLength="3"
          maxLength="30"
          required
          name="password"
          value={values.password || ""}
          onChange={handleChange}
        />
        <span
          className="form__input-error form__input_password-error form__input-error_visible">
          {errors.password}
        </span>
        <button
          type="submit"
          className={`form__btn form__btn_signin ${!isValid && "form__btn_disabled"}`}
          disabled={!isValid}>
            Войти
        </button>
        <p className="form__bottom-text">Ещё не зарегистрированы?
          <Link to="/signup" className="form__bottom-link">Регистрация</Link>
        </p>
      </form>
    </section>
  );
};

export default Login;
