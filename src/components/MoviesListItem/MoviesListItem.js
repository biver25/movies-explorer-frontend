import React from 'react';
import './MoviesListItem.css';

function MoviesListItem ({ movie, isSaved }) {
  const duration = `${Math.floor(movie.duration / 60)}ч ${movie.duration % 60}м`;

  const [isMouseOn, setIsMouseOn] = React.useState(false);
  const mouseHover = (e) => { setIsMouseOn(true)}
  const mouseLeave = () => { setIsMouseOn(false)}

  return (
    <article className="movie" onMouseEnter={mouseHover} onMouseLeave={mouseLeave}>
      <a className="movie__link" href={movie.link} target="_blank" rel="noreferrer">
        <img className="movie__poster" src={movie.image} alt={movie.name} />
      </a>
      <div className="movie__caption-cantainer">
        <p className="movie__caption">{movie.name}</p>
          {
            isSaved
            ? ( <button
                  className="movie__btn-remove"
                  style={
                    isMouseOn
                    ? {visibility: 'visible'}
                    : {visibility: 'hidden'}
                  }
                />
              )
            : ( <button className={ movie.saved ? "movie__btn-save movie__btn-save_active" : "movie__btn-save" } /> )
          }
      </div>
      <p className="movie__duration">{duration}</p>
    </article>

  )
}

export default MoviesListItem;
