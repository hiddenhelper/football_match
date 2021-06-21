import {
  createStore, applyMiddleware, Store, compose,
} from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers/reducer';
import { TokiState, TokiAction, DispatchType } from '../interfaces/type.d';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store: Store<TokiState, TokiAction> & {
  dispatch: DispatchType;
} = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
