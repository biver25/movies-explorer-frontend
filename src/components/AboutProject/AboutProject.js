import './AboutProject.css';

function AboutProject(props){
  return (
    <section className="project" id="project">
      <h1 className="project__head-title">О проекте</h1>
      <div className="project__description">
        <div>
          <h2 className="project__title">Дипломный проект включал 5 этапов</h2>
          <p className="project__article">Составление плана, работу над бэкендом,
            вёрстку, добавление функциональности и финальные доработки.</p>
        </div>
        <div>
          <h2 className="project__title">На выполнение диплома ушло 5 недель</h2>
          <p className="project__article">У каждого этапа был мягкий и жёсткий дедлайн,
            которые нужно было соблюдать, чтобы успешно защититься.</p>
        </div>
      </div>
      <table className="project__date-period">
        <tr className="project__row">
          <th className="project__week project__week_highlighted">1 неделя</th>
          <th className="project__week">4 недели</th>
        </tr>
        <tr className="project__row">
          <th className="project__phase">Back-end</th>
          <th className="project__phase">Front-end</th>
        </tr>
      </table>
    </section>
  );
}
export default AboutProject;
