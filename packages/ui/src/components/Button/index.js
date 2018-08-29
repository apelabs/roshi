import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { Button as Base } from 'rebass';

const StyledButton = styled(Base)(styleProps => ({ ...styleProps }));

/**
 * [Rebass Button Component](http://jxnblk.com/rebass/components/Button)
 *
 * @visibleName Button
 */
const Button = ({ newProps, ...oldProps }) => {
  const props = {
    ...newProps,
    ...oldProps,
  };

  return <StyledButton {...props}>{props.children}</StyledButton>;
};

Button.propTypes = {
  /** Button fontSize, **Rebass prop that defaults to 1** **/
  fontSize: PropTypes.number,
};

Button.defaultProps = {
  fontSize: 16,
};

/** @component */
export default Button;
