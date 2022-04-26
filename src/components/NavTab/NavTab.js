import './NavTab.css'

function NavTab(props) {
  return (
    <nav className="nav">
      <a href="#project" className="nav__link nav__about-proj">О проекте</a>
      <a href="#techs" className="nav__link nav__techs">Технологии</a>
      <a href="#me" className="nav__link nav__student">Студент</a>
    </nav>
  );
}

export default NavTab;
