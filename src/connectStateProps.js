import connect from 'react-redux/lib/components/connect';
import createHelper from 'recompose/createHelper';

const connectStateProps = (mapStateToProps) =>
  (BaseComponent) => connect(mapStateToProps)(BaseComponent);

export default createHelper(connectStateProps, 'connectStateProps');
