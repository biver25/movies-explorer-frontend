import './Portfolio.css';
import { info } from '../../utils/info';

/* add key*/

function Portfolio (props) {
  return (
    <div className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__links-list">
        {
          info.portfolio.map((portfolio) =>
            <li className="portfolio__link-container" key={portfolio.name}>
              <p className="portfolio__link-description">{portfolio.name}</p>
              <a className="portfolio__link-arrow" href={portfolio.link} target="_blank" rel="noreferrer">
                &#8599;
              </a>
            </li>
          )
        }
      </ul>
    </div>
  );
};

export default Portfolio;
