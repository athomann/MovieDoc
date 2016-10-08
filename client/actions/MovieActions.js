import {
  AUTH_TOKEN,
  ALL_MOVIES_URL,
  MOVIES_BY_RANK_URL,
  MOVIE_DETAIL_URL,
} from '../constants/constants';

// ***** Considerations *****
// Put ActionTypes in seperate file
// Use redux API middleware to handle fetch boilerplate

export const FETCH_MOVIES_REQUEST = 'FETCH_MOVIES_REQUEST';
export const FETCH_MOVIES_SUCCESS = 'FETCH_MOVIES_SUCCESS';
export const FETCH_MOVIES_FAILURE = 'FETCH_MOVIES_FAILURE';
export function fetchAllMovies() {
  return (dispatch) => {
    dispatch({ type: FETCH_MOVIES_REQUEST });
    return fetch(`${ALL_MOVIES_URL}?authToken=${AUTH_TOKEN}`)
      .then(data => data.json())
      .then(json => dispatch({
        type: FETCH_MOVIES_SUCCESS,
        payload: json,
      }));
  }
}

export const FETCH_RANK_REQUEST = 'FETCH_RANK_REQUEST';
export const FETCH_RANK_SUCCESS = 'FETCH_RANK_SUCCESS';
export const FETCH_RANK_FAILURE = 'FETCH_RANK_FAILURE';
export function fetchMovieRank(startRankIndex, numMovies) {
  return (dispatch) => {
    dispatch({ type: FETCH_MOVIES_REQUEST });
    return fetch(`${MOVIES_BY_RANK_URL}?authToken=${AUTH_TOKEN}&startRankIndex=${startRankIndex}&numMovies=${numMovies}`)
      .then(data => data.json())
      .then(json => dispatch({
        type: FETCH_RANK_SUCCESS,
        payload: json,
      })).catch(error => dispatch({ type: FETCH_RANK_FAILURE, error }));
  }
}

export const FETCH_DETAIL_REQUEST = 'FETCH_DETAIL_REQUEST';
export const FETCH_DETAIL_SUCCESS = 'FETCH_DETAIL_SUCCESS';
export const FETCH_DETAIL_FAILURE = 'FETCH_DETAIL_FAILURE';
export function fetchMovieDetail() {
  return (dispatch) => {
    dispatch({ type: FETCH_MOVIES_REQUEST });
    return fetch(`${MOVIE_DETAIL_URL}?authToken=${AUTH_TOKEN}`)
      .then(data => data.json())
      .then(json => dispatch({
        type: FETCH_DETAIL_SUCCESS,
        payload: json,
      })).catch(error => dispatch({ type: FETCH_DETAIL_FAILURE, error }));
  }
}
