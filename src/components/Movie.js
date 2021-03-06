import React from 'react'
import PropTypes from 'prop-types'
import './Movie.css'
import { Link } from 'react-router-dom'

function Movie({ id, year, title, summary, poster, genres }) {
  return (
    <Link
      to={{
        pathname: `/movie/${id}`,
        state: {
          year,
          title,
          summary,
          poster,
          genres
        }
      }}
    >
      <div className="movie">
        <img src={poster} alt={title} />
        <div className="movie-data">
          <h3 className="movie-title">{title}</h3>
          <h5 className="movie-year">{year}</h5>
          <p className="movie-summary">{summary.slice(0, 140)}...</p>
          <ul className="generes">
            {genres.map((genere, step) => (
              <li key={step} className="generes-genere">
                {genere}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Link>
  )
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie
