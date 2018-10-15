import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import purple from '@material-ui/core/colors/purple';

/**
 * [Circular progress from Material-ui](https://material-ui.com/api/circular-progress/)
 *
 * @visibleName RoshiLoader
 */

const RoshiLoader = props => {
  const defaultStyles = { color: purple[500] };
  const extendedStyles = props.style ? { ...defaultStyles, ...props.style } : defaultStyles;

  return <CircularProgress style={extendedStyles} thickness={7} {...props} />;
};

/** @component */
export default RoshiLoader;
