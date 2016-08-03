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
      if (redirectLocation) {
        return resolve({
          redirectLocation,
        });
      }

      if (renderProps) {
        return resolve({
          ...renderProps,
          store,
        });
      }

      return reject(error || 'Not match');
    });
  });
};

export default bootstrap;
