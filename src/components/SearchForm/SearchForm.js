import React from 'react';
import './SearchForm.css';

function SearchForm ({ isMobile, onSearch, onChange, checkboxStatus }) {

  const [ searchWord, setSearchWord ] = React.useState('');
  //console.log(lastSearch, searchWord)
  const handleInputChange = (e) => {
    setSearchWord(e.target.value)
  }

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchWord);
  }

  return (
    <section className="search">
      <form className="form-search" onSubmit={handleSearch}>
        <div className="form-search__input-container">
        {isMobile ? "" : <div className="form-search__magnifier"></div> }
        <input
          type="text"
          className="form-search__input"
          placeholder="Фильм"
          required
          value={searchWord}
          onChange={handleInputChange}
        />
        </div>
        <button type="submit" className="form-search__btn" ></button>
      </form>
      {isMobile ? "" : <div className="search-delimeter"></div> }
      <div className="switch-container">
        <label className="switch-container__switch">
          <input
            type="checkbox"
            className="switch-container__checkbox"
            onChange={onChange}
            checked={checkboxStatus}
          />
          <span className="switch-container__btn"></span>
        </label>
        <span className="switch-container__label">Короткометражки</span>
      </div>
    </section>
  );
};

export default SearchForm;
