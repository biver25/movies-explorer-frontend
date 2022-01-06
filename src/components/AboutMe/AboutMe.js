import myPhoto from '../../images/me-photo.jpg'
import './AboutMe.css';
import Portfolio from '../Portfolio/Portfolio';
import { info } from '../../utils/info';

function AboutMe(props) {
  return (
    <section className="me">
      <h1 className="me__head-title">Студент</h1>
      <img className="me__photo" src={myPhoto} alt="Фотокарточка" />
      <h2 className="me__name">{info.name}</h2>
      <p className="me__article">{info.about}</p>
      <p className="me__article">{info.article}</p>
      <div className="me__social-section">
        {
          info.links.map((link) =>
            <a className="me__social-link" href={link.link} target="_blank" rel="noreferrer">
              {link.name}
            </a>
          )
        }
      </div>
      <Portfolio />
    </section>
  );
};

export default AboutMe;
