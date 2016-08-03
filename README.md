## Redux Bootstrap

Bootstrap for my web redux react projects

[![Build Status](https://img.shields.io/travis/morlay/redux-bootstrap.svg?style=flat-square)](https://travis-ci.org/morlay/redux-bootstrap)
[![NPM](https://img.shields.io/npm/v/@morlay/redux-bootstrap.svg?style=flat-square)](https://npmjs.org/package/@morlay/redux-bootstrap)
[![Dependencies](https://img.shields.io/david/morlay/redux-bootstrap.svg?style=flat-square)](https://david-dm.org/morlay/redux-bootstrap)

### Grouped Packages

* react
* react-dom
* redux
* react-router
* react-router-redux
* react-redux
* recompose
* lodash

### Extra APIs

### `bootstrap: Promise`

```js
bootstrap({
  history,
  location: ReactRouterLocation,
  getRoutes: (store) => ReactRouterPlainRoute,
  
  reducers: Object, // optional
  middlewares: Array,  // optional
  composes: Array, // optional
  initialState,
})
.then(({ redirectLocation, ...renderProps }) => {
  // do render in browser or server-side
})
```

same as [react-router#mactch](https://github.com/reactjs/react-router/blob/master/docs/API.md#match-routes-location-history-options--cb)
but return Promise resolve `{ [renderProps], [redirectLocation] }` and reject `err`

* `store` and `history` must be passed for `react-router-redux#syncHistoryWithStore`

### `<RouterProvider {...renderProps} client/>`

### `connectStateProps(mapStateToProps)` and `connectDispatchProps(mapDispatchToProps)`

same as `react-redux#connect` but simplify args.
 
* `mergeProps` could use `recompose#mapProps` instead. 
 
### `withRouting(Component)`

provide `{ routing }` in props,


