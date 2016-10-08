import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Movie from '../Movie/Movie';
import { fetchAllMovies, fetchMovieRank, fetchMovieDetail } from '../../actions/MovieActions';
import s from './MovieList.css';

class MovieList extends Component {

  componentDidMount() {
    this.props.dispatch(fetchAllMovies()).then(() => {
      this.props.dispatch(fetchMovieRank(0, 11));
    });
  }

  render() {
    const { ids, viewTopMovies } = this.props;
    return (
      <div className={s.container}>
        <h1 className={s.heading}>
          {viewTopMovies ? 'Top Movies of the Year' : 'All Movies'}
        </h1>
        <div className={s.list}>
          {ids.map(id => (
            <Movie id={id} key={id} showYearlyRank={viewTopMovies} />
          ))}
        </div>
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  // React redux performance technique
  // Pass in only an ID array so large lists don't rerender when movie data changes.
  return {
    ids: ownProps.viewTopMovies
      ? state.movies.rankIds
      : state.movies.allMovieIds,
  };
}

export default connect(mapStateToProps)(MovieList);
