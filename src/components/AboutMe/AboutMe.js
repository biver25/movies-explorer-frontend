import myPhoto from '../../images/me-photo.jpg'
import './AboutMe.css';
import Portfolio from '../Portfolio/Portfolio';

function AboutMe(props) {
  return (
    <section className="me">
      <h1 className="me__head-title">Студент</h1>
      <img className="me__photo" src={myPhoto} alt="Фотокарточка" />
      <h2 className="me__name">Илья Бурцев</h2>
      <p className="me__article">Фронтенд-разработчик, 33 года</p>
      <p className="me__article">
        Я живу в Москве, закончил факультет ИВТ в Волгоградском политехе.
        У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом.
        Недавно начал кодить. С 2012 года работаю в компании «Pernod Ricard Rouss».
        Прохожу курс по веб-разработке. А еще участвую в проекте по распознаванию предметов на фотографии.
      </p>
      <div className="me__social-section">
        <a className="me__social-link" href="https://www.facebook.com/ilya.burtsev.9/" target="_blank" rel="noreferrer">
          Facebook
        </a>
        <a className="me__social-link" href="https://github.com/biver25" target="_blank" rel="noreferrer">
          Github
        </a>
      </div>
      <Portfolio />
    </section>
  );
};

export default AboutMe;
