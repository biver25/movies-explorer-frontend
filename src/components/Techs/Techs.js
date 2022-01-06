import './Techs.css';

function Techs(props){
  const techs = [
    'HTML', 'CSS', 'JS', 'React', 'Git', 'Express.js', 'mongoDB'
  ]
  return (
    <div className="techs">
      <h1 className="techs__head-title">Технологии</h1>
      <h2 className="techs__title">7 технологий</h2>
      <p className="techs__article">На курсе веб-разработки мы освоили технологии,
        которые применили в дипломном проекте.</p>
      <ul className="techs__list">
        {
          techs.map((tech) =>
            <li className="techs__list-item" key={tech}>
              <p>{tech}</p>
            </li>
          )
        }
      </ul>
    </div>
  );
}
export default Techs;
