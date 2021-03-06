import './SearchForm.css';

function SearchForm ({ isMobile }) {
  return (
    <section className="search">
      <form className="form-search">
        <div className="form-search__input-container">
        {isMobile ? "" : <div className="form-search__magnifier"></div> }
        <input type="text" className="form-search__input" placeholder="Фильм" />
        </div>
        <button className="form-search__btn"></button>
      </form>
      {isMobile ? "" : <div className="search-delimeter"></div> }
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
