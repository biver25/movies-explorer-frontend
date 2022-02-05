import React from 'react';
import './Profile.css';
import Header from '../Header/Header';

function Profile ({ userName, userEmail }) {

  const [ email, setEmail ] = React.useState(userEmail);
  const [ name, setName ] = React.useState(userName);

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  return (
    <>
      <Header />
      <section className="profile">
        <form className="profile__form">
          <h1 className="profile__title">{`Привет, ${userName}`}</h1>
          <div className="profile__input-field">
            <label className="profile__label">Имя</label>
            <input
            className="profile__input"
            type="text"
            value={name}
            onChange={handleNameChange}
            required
            minLength="2"
            maxLength="40"
            />
          </div>
          {/*<span className="profile__input-error profile__input_name-error"></span>*/}
          <div className="profile__input-field">
            <label className="profile__label">E-mail</label>
            <input
            className="profile__input"
            type="text"
            value={email}
            onChange={handleEmailChange}
            required
            minLength="2"
            maxLength="40"/>
          </div>
          {/*<span className="profile__input-error profile__input_name-error"></span>*/}
          <button className="profile__btn">Редактировать</button>
          <button className="profile__btn profile__btn_red">Выйти из аккаунта</button>
        </form>
      </section>
    </>
  );
};

export default Profile;
