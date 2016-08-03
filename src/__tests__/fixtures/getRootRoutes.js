import PageHome from './components/PageHome';
import PageDetail from './components/PageDetail';

const getRootRoutes = () => ({
  path: '/',
  indexRoute: {
    component: PageHome,
  },
  childRoutes: [{
    path: '/detail',
    component: PageDetail,
  }, {
    path: '*',
    onEnter: (nextState, replace) => {
      replace('/');
    },
  }],
});

export default getRootRoutes;

