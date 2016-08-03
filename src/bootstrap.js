import { match } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import configureStore from './configureStore';

const bootstrap = ({
  history,
  location,
  getRoutes,

  reducers,
  middlewares,
  composes,
  initialState,
}) => {
  const store = configureStore({
    history,
    reducers,
    middlewares,
    composes,
    initialState,
  });

  return new Promise((resolve, reject) => {
    match({
      location,
      routes: getRoutes(store),
      history: syncHistoryWithStore(history, store),
    }, (error, redirectLocation, renderProps) => {
      if (error) {
        reject(error);
      } else if (redirectLocation) {
        resolve({
          redirectLocation,
        });
      } else {
        resolve({
          ...renderProps,
          store,
        });
      }
    });
  });
};

export default bootstrap;
