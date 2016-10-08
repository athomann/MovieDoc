import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import s from './Movie.css';

class Movie extends Component {
  render() {
    const { movie, showYearlyRank } = this.props;
    return (
      <div className={s.container}>
        <div onClick={this.toggleMetaData}>
          <h1 className={s.title}>{movie.Name}</h1>
        </div>
        <div className={s.section}>
          {showYearlyRank && (
            <span className={s.row}>
              <h3 className={s.heading}>Rank by Year:</h3>
              <span className={s.rank}>{movie.rankByYear}</span>
            </span>
          )}
          <span className={s.row}>
            <h3 className={s.heading}>All Time Rank:</h3>
            <span className={s.rank}>{movie.Rank}</span>
          </span>
        </div>

        <div className={s.section}>
          <h3 className={s.heading}>Description</h3>
          <span className={s.duration}>Duration: {movie.Duration}</span>
          <p className={s.description}>{movie.Description}</p>
        </div>

        <div className={s.section}>
          <h3 className={s.heading}>Genres</h3>
          <ul className={s.list}>
            {movie.Genres.map(genre => (
              <li className={s.item}>{genre}</li>
            ))}
          </ul>
        </div>
        <div className={s.section}>
          <h3 className={s.heading}>Actors</h3>
          <ul className={s.list}>
            {movie.Actors.map(actor => (
              <li className={s.item}>{actor}</li>
            ))}
          </ul>
        </div>

        <a href="https://zocdoc.com" className={s.purchaseButton} target="_blank">
          Purchase Tickets
        </a>
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {
    movie: state.movies.inventory[ownProps.id],
  };
}

export default connect(mapStateToProps)(Movie);
