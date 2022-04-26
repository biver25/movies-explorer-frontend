import React from 'react';
import './MoviesListItem.css';
import { config } from '../../utils/config'
import helper from '../../utils/helper';

function MoviesListItem ({ movie, isSaved, isMobile, saved }) {

  const [isMouseOn, setIsMouseOn] = React.useState(false);
  const mouseHover = () => { setIsMouseOn(true)}
  const mouseLeave = () => { setIsMouseOn(false)}

  //const moviePosterUrl = isSaved ? config.

  return (
    <article className="movie" onMouseEnter={mouseHover} onMouseLeave={mouseLeave}>
      <a className="movie__link" href={movie.trailerLink} target="_blank" rel="noreferrer">
        <img
          className="movie__poster"
          src={`${config.BEATAPI_BASE_URL}${movie.image.url}`}
          alt={movie.nameRU} href={movie.trailerLink}
          target="_blank"
          rel="noreferrer"
        />
      </a>
      <div className="movie__caption-cantainer">
        <p className="movie__caption">{movie.nameRU}</p>
          {
            isSaved
            ? ( <button
                  className="movie__btn-remove"
                  style={
                    isMouseOn || isMobile
                    ? {visibility: 'visible'}
                    : {visibility: 'hidden'}
                  }
                />
              )
            : ( <button className={ movie.saved ? "movie__btn-save movie__btn-save_active" : "movie__btn-save" } /> )
          }
      </div>
      <p className="movie__duration">{helper.convertDuration(movie.duration)}</p>
    </article>

  )
}

export default MoviesListItem;
