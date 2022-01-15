import './SearchForm.css';

function SearchForm (props, children) {
  return (
    <section className="search">
      <form className="form-search">
        <input type="text" className="form-search__input" placeholder="Фильм" />
        <button className="form-search__btn"></button>
      </form>
      <div className="switch-container">
        <label className="switch-container__switch">
          <input type="checkbox" className="switch-container__checkbox" />
          <span className="switch-container__btn"></span>
        </label>
        <span className="switch-container__label">Короткометражки</span>
      </div>
    </section>
  );
};

export default SearchForm;
