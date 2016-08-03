import React from 'react';
import { routerActions } from 'react-router-redux';

import connectDispatchProps from '../../../connectDispatchProps';

const PageDetail = () => (<div />);

export default connectDispatchProps({
  push: routerActions.push,
})(PageDetail);
