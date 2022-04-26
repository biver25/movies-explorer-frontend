import myPhoto from '../../images/me-photo.jpg'
import './AboutMe.css';
import Portfolio from '../Portfolio/Portfolio';
import { info } from '../../utils/info';

function AboutMe(props) {
  return (
    <section className="me" id="me">
      <h1 className="me__head-title">Студент</h1>
      <div className="me__section">
        <img className="me__photo" src={myPhoto} alt="Фотокарточка" />
        <div className="me__article-section">
          <div className="me__article-personal">
            <h2 className="me__name">{info.name}</h2>
            <p className="me__article">{info.about}</p>
            <p className="me__article">{info.article}</p>
          </div>
          <div className="me__social-section">
            {info.links.map((link) =>
                <a className="me__social-link" href={link.link} key={link.name} target="_blank" rel="noreferrer">
                  {link.name}
                </a>
            )}
          </div>
        </div>
      </div>
      <Portfolio />
    </section>
  );
};

export default AboutMe;
