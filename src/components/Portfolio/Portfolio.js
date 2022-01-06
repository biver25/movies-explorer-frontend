import './Portfolio.css';

/* add key*/

function Portfolio (props) {
  return (
    <div className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__links-list">
        <li className="portfolio__link-container">
          <p className="portfolio__link-description">Статичный сайт</p>
          <a className="portfolio__link-arrow" href="https://biver25.github.io/russian-travel/" target="_blank" rel="noreferrer">
            &#8599;
          </a>
        </li>
        <li className="portfolio__link-container">
          <p className="portfolio__link-description">Адаптивный сайт</p>
          <a className="portfolio__link-arrow" href="https://biver25.github.io/russian-travel/" target="_blank" rel="noreferrer">
            &#8599;
          </a>
        </li>
        <li className="portfolio__link-container">
          <p className="portfolio__link-description">Одностраничное приложение</p>
          <a className="portfolio__link-arrow" href="https://biver25.github.io/russian-travel/" target="_blank" rel="noreferrer">
            &#8599;
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Portfolio;
