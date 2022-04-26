import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css';
import { useForm } from '../../utils/useForm';

function Register ({onRegister}) {

  const { values, handleChange, errors, isValid, resetForm } = useForm();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values.name, values.email, values.password);
    onRegister(values);
    resetForm();
  }

  return (
    <section className="register">
      <form className="form" onSubmit={handleSubmit}>
        <div className="form__title-container">
          <div className="form__title-logo"></div>
          <h1 className="form__title">Добро пожаловать!</h1>
        </div>
        <label className="form__label">Имя</label>
        <input
        className="form__input form__input_type_name"
        type="text"
        name="name"
        required
        minLength="2"
        maxLength="30"
        value={values.name || ""}
        onChange={handleChange}
        />
        <span className="form__input-error form__input_name-error form__input-error_visible">
          {errors.name}
        </span>
        <label className="form__label">E-mail</label>
        <input
        className="form__input form__input_type_email"
        type="email"
        name="email"
        required
        value={values.email || ""}
        onChange={handleChange}
        />
        <span className="form__input-error form__input_email-error form__input-error_visible">
          {errors.email}
        </span>
        <label className="form__label">Пароль</label>
        <input
        className="form__input form__input_type_password form__input_errored"
        type="password"
        name="password"
        required
        minLength="3"
        maxLength="30"
        value={values.password || ""}
        onChange={handleChange}
        />
        <span className="form__input-error form__input_password-error form__input-error_visible">
          {errors.password}
        </span>
        <button
          type="submit"
          className={isValid ? "form__btn" : "form__btn form__btn_disabled"}
          disabled={!isValid}>
            Зарегистрироваться
          </button>
        <p className="form__bottom-text">Уже зарегестрированы?
          <Link to="/signin" className="form__bottom-link">Войти</Link>
        </p>
      </form>
    </section>
  );
};

export default Register;
