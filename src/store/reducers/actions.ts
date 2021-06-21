import * as actionTypes from './actionTypes';
import { getMatchData } from '../../services/api';
import { TokiAction, MatchDataItem, DispatchType } from '../../interfaces/type.d';

export function fetchDataPending(): TokiAction {
  return {
    type: actionTypes.FETCH_MATCH_DATA_PENDING,
    match: null,
    matches: [],
  };
}

export function fetchDataSuccess(data: MatchDataItem[]): TokiAction {
  return {
    type: actionTypes.FETCH_MATCH_DATA_SUCCESS,
    match: null,
    matches: data,
  };
}

export function fetchData(url: string) {
  return (dispatch: DispatchType) => {
    dispatch(fetchDataPending());
    getMatchData(url)
      .then((res) => {
        dispatch(fetchDataSuccess(res.data));
      })
      .catch((err) => {
        alert(err);
      });
  };
}

export function setEntry(match: MatchDataItem): TokiAction {
  return {
    type: actionTypes.SET_ENTRIES,
    match,
    matches: [],
  };
}
