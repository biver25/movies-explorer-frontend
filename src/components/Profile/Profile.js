import React from 'react';
import './Profile.css';
import Header from '../Header/Header';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { useForm } from '../../utils/useForm';

function Profile ({ isDesktop, isLoggedIn, onProfileChange, onLogout }) {

  const currentUser = React.useContext(CurrentUserContext);
  const {values, errors, isValid, handleChange, setValues} = useForm();
  /*const [ email, setEmail ] = React.useState('');
  const [ name, setName ] = React.useState('');*/

  /*const handleNameChange = (event) => {
    setName(event.target.value);
  }

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  }*/

  React.useEffect(() => {
    setValues({...values, name: currentUser.name, email: currentUser.email});
  }, [currentUser]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onProfileChange(values);
  }

  const onHandleLogout = (e) => {
    e.preventDefault();
    onLogout();
  }

  return (
    <>
      <Header isDesktop={isDesktop} isLoggedIn={isLoggedIn}/>
      <section className="profile">
        <form className="profile__form" onSubmit={handleSubmit}>
          <h1 className="profile__title">{`Привет, ${currentUser.name}`}</h1>
          <div className="profile__input-field">
            <label className="profile__label">Имя</label>
            <input
              className="profile__input"
              type="text"
              name="name"
              value={values.name || ""}
              onChange={handleChange}
              required
              minLength="2"
              maxLength="40"
            />
          </div>
          <span className="profile__input-error profile__input-error_visible">{errors.name}</span>
          <div className="profile__input-field">
            <label className="profile__label">E-mail</label>
            <input
              className="profile__input"
              type="email"
              name="email"
              value={values.email || ""}
              onChange={handleChange}
              required
              minLength="2"
              maxLength="40"
            />
          </div>
          <span className="profile__input-error profile__input-error_visible">{errors.email}</span>
          <button
            type="submit"
            className={`profile__btn ${!isValid && "profile__btn_disabled"}`}
            disabled={!isValid}>
              Редактировать
          </button>
          <button className="profile__btn profile__btn_red" onClick={onHandleLogout}>Выйти из аккаунта</button>
        </form>
      </section>
    </>
  );
};

export default Profile;
