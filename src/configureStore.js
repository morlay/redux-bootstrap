import {
  applyMiddleware,
  combineReducers,
  createStore,
  compose,
} from 'redux';

import {
  routerMiddleware,
  routerReducer,
} from 'react-router-redux';

const configureStore = ({
  history,
  middlewares,
  composers,
  reducers,
  initialState,
}) => {
  const rootReducer = combineReducers({
    ...reducers,
    routing: routerReducer,
  });

  return compose(
    applyMiddleware(
      ...(middlewares || []),
      routerMiddleware(history)
    ),
    ...(composers || []),
  )(createStore)(rootReducer, initialState);
};

export default configureStore;
