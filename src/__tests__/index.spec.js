import { expect, mount, jsdom } from '@morlay/tests-react';
import React from 'react';

import { createMemoryHistory } from 'react-router';

import { bootstrap, RouterProvider } from '../index';

import getRootRoutes from './fixtures/getRootRoutes';

import PageHome from './fixtures/components/PageHome';
import PageDetail from './fixtures/components/PageDetail';

describe(__filename, () => {
  jsdom();

  it('should match route and render', () =>
    bootstrap({
      location: '/detail',
      history: createMemoryHistory(),
      getRoutes: getRootRoutes,
    })
      .then(({ redirectLocation, ...renderProps }) => {
        if (!redirectLocation) {
          const wrapper = mount(<RouterProvider {...renderProps} />);
          expect(wrapper.find(PageDetail).length).to.eql(1);
          expect(wrapper.find(PageHome).length).to.eql(0);
        }
      })
  );

  it('should redirect route', () =>
    bootstrap({
      location: '/not-found',
      history: createMemoryHistory(),
      getRoutes: getRootRoutes,
    })

      .then(({ redirectLocation }) => {
        if (redirectLocation) {
          expect(redirectLocation.pathname).to.eql('/');
        }
      })
  );
});
