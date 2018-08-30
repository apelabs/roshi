import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { Input as Base } from 'rebass';
import { Label } from 'rebass';

const StyledInput = styled(Base)(styleProps => ({ ...styleProps }));
const StyledLabel = styled(Label)(styleProps => ({ ...styleProps }));
/**
 * [Rebass Input Component](http://jxnblk.com/rebass/components/Input)
 *
 * @visibleName Input
 */
const Input = ({ newProps, ...oldProps }) => {
  const props = {
    ...newProps,
    ...oldProps,
  };

  return <StyledInput {...props}>{props.children}</StyledInput>;
};

Input.propTypes = {
  /** Input type attribute **/
  type: PropTypes.string.isRequired,
};

Input.defaultProps = {
  type: 'text',
};

/** @component */
export default Input;
