import { createElement } from 'react';
import wrapActionCreators from 'react-redux/lib/utils/wrapActionCreators';
import storeShape from 'react-redux/lib/utils/storeShape';
import isPlainObject from 'lodash/isPlainObject';
import createHelper from 'recompose/createHelper';

const defaultMapDispatchToProps = dispatch => ({ dispatch });

const connectDispatchProps = (mapDispatchToProps) =>
  (BaseComponent) => {
    const finalMapDispatchToProps = isPlainObject(mapDispatchToProps) ?
      wrapActionCreators(mapDispatchToProps) :
      (mapDispatchToProps || defaultMapDispatchToProps);

    const ConnectDispatchProps = (props, context) => createElement(
      BaseComponent,
      Object.assign({}, props, finalMapDispatchToProps(context.store.dispatch, props), {
        dispatch: context.store.dispatch,
      })
    );

    ConnectDispatchProps.contextTypes = {
      store: storeShape,
    };

    return ConnectDispatchProps;
  };

export default createHelper(connectDispatchProps, 'connectDispatchProps');
