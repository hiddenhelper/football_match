import * as actionTypes from './actionTypes';
import { TokiState, TokiAction, MatchDataItem } from '../../interfaces/type.d';

const initialState: TokiState = {
  matches: [],
  pending: false,
};

const reducer = (
  state: TokiState = initialState,
  action: TokiAction,
): TokiState => {
  const newState = { ...state };
  switch (action.type) {
    case actionTypes.FETCH_MATCH_DATA_SUCCESS:
      newState.matches = action.matches;
      newState.pending = false;
      return newState;
    case actionTypes.FETCH_MATCH_DATA_PENDING:
      newState.pending = true;
      return newState;
    case actionTypes.SET_ENTRIES:
      newState.matches = state.matches.map((item: MatchDataItem) => {
        const newItem = item;
        if (item.eventID === action.match?.eventID) {
          newItem.entry = !item.entry;
        }
        return newItem;
      });
      return JSON.parse(JSON.stringify(newState));
    default:
      return state;
  }
};

export default reducer;
