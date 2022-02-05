import './Footer.css';
import { info } from '../../utils/info';

function Footer (props) {
  return (
    <section className="footer">
      <h2 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h2>
      <div className="footer__container">
        <ul className="footer__link-list">
          {
            info.footer.map((link) =>
              <li className="footer__link-item" key={link.name}>
                <a className="footer__link" href={link.link} target="_blank" rel="noreferrer">{link.name}</a>
              </li>
            )
          }
        </ul>
        <p className="footer__copyright">&copy;2022</p>
      </div>
    </section>
  )
}

export default Footer;
