import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { Input as Base } from 'rebass';
import { Label } from 'rebass';

const StyledInput = styled(Base)(styleProps => ({
  width: '50px',
  ...styleProps,
}));
const StyledLabel = styled(Label)(styleProps => ({
  fontSize: '16px',
  color: 'black',
}));
/**
 * [Rebass Input Component](http://jxnblk.com/rebass/components/Input)
 *
 * @visibleName Input
 */
const InputWithLabel = ({ newProps, ...oldProps }) => {
  const props = {
    ...newProps,
    ...oldProps,
  };

  const { labeltext, ...other } = props;

  return (
    <StyledLabel>
      {labeltext}
      <StyledInput {...other} />
    </StyledLabel>
  );
};

InputWithLabel.propTypes = {
  /** Input type attribute **/
  type: PropTypes.string.isRequired,
  /** Text for label component **/
  labeltext: PropTypes.string.isRequired,
};

InputWithLabel.defaultProps = {
  type: 'text',
};

/** @component */
export default InputWithLabel;
