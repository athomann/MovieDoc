
// Consideration - Put actions in one object to limit import length
// import ActionTypes from './ActionTypes';
import {
  FETCH_MOVIES_REQUEST,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_FAILURE,
  FETCH_RANK_REQUEST,
  FETCH_RANK_SUCCESS,
  FETCH_RANK_FAILURE,
  FETCH_DETAIL_REQUEST,
  FETCH_DETAIL_SUCCESS,
  FETCH_DETAIL_FAILURE,
} from '../actions/MovieActions';
const merge = require('deepmerge');

const initialState = {
  allMovieIds: [],
  rankIds: [],
  inventory: {},
};

export default function movies(state = initialState, action) {
  switch (action.type) {
    case FETCH_MOVIES_REQUEST:
    case FETCH_RANK_REQUEST:
    case FETCH_DETAIL_REQUEST:
      return {
        ...state,
        isFetching: true,
      };

    case FETCH_MOVIES_SUCCESS: {
      const movieIds = [];
      const normalizedData = action.payload.reduce((a, b, i) => {
        movieIds.push(b.Id);
        a[b.Id] = b;
        return a;
      }, {});
      return {
        ...state,
        allMovieIds: movieIds,
        isFetching: false,
        inventory: normalizedData
      };
    }

    case FETCH_RANK_SUCCESS: {
      const yearlyRankings = action.payload.reduce((a, b) => {
        a[b.Id] = {
          rankByYear: b.Rank
        };
        return a;
      }, {});

      const inventory = merge(state.inventory, yearlyRankings);
      return {
        ...state,
        inventory: inventory,
        rankIds: action.payload.map(item => item.Id),
      };
    }

    case FETCH_DETAIL_SUCCESS:
      return state;

    case FETCH_MOVIES_FAILURE:
    case FETCH_RANK_FAILURE:
    case FETCH_DETAIL_FAILURE:
      return {
        ...state,
        error: action.error,
        isFetching: false,
      };

    default:
      return state;
  }
}
