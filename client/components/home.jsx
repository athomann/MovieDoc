import React, { Component, PropTypes } from "react";
import Movie from './Movie/Movie';
import MovieList from './MovieList/MovieList';
import { fetchAllMovies } from '../actions/MovieActions';
import s from './Home.css';

export class Home extends Component {
  constructor() {
    super();
    this.state = {
      viewTopMovies: false,
    };
    this.toggleTopMovies = this.toggleTopMovies.bind(this);
  }

  toggleTopMovies() {
    scrollTo(0, 0);
    this.setState({ viewTopMovies: !this.state.viewTopMovies })
  }

  render() {
    return (
      <div ref={(ref) => this.container = ref}>
        <header className={s.Header}>
          <div className={s.HeaderContainer}>
            <h1 className={s.logo}>MovieDoc</h1>
            <button className={s.button} onClick={this.toggleTopMovies}>
              {this.state.viewTopMovies
                ? 'All Movies'
                : 'Top Movies of Year'
              }
            </button>
          </div>
        </header>
        <MovieList viewTopMovies={this.state.viewTopMovies} />
      </div>
    );
  }
}
