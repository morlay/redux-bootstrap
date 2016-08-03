import React, { PropTypes } from 'react';
import Provider from 'react-redux/lib/components/Provider';
import Router from 'react-router/lib/Router';
import RouterContext from 'react-router/lib/RouterContext';

const RouterProvider = ({ client, store, ...otherProps }) => {
  const RouterComponent = client ? Router : RouterContext;

  return (
    <Provider store={store}>
      <RouterComponent
        {...otherProps}
        history={undefined}
      />
    </Provider>
  );
};

RouterProvider.propTypes = {
  store: PropTypes.object.isRequired,
  client: PropTypes.bool,
};

export default RouterProvider;
