import './NavTab.css'

function NavTab(props) {
  return (
    <div className="nav">
      <button className="nav__btn nav__about-proj">О проекте</button>
      <button className="nav__btn nav__techs">Технологии</button>
      <button className="nav__btn nav__student">Студент</button>
    </div>
  );
}

export default NavTab;
