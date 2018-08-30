import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { Input as Base } from 'rebass';
import { Label } from 'rebass';

const StyledInput = styled(Base)(props => {
  const extraProps = props.inputprops ? props.inputprops : null;

  return {
    width: '50px',
    ...extraProps,
  };
});

const StyledLabel = styled(Label)(props => {
  const extraProps = props.labelprops ? props.labelprops : null;

  return {
    fontSize: '16px',
    color: 'black',
    ...extraProps,
  };
});
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

  const { labeltext, inputprops, labelprops, ...otherProps } = props;

  return (
    <StyledLabel {...{ labelprops }}>
      {labeltext}
      <StyledInput {...{ inputprops }} {...otherProps} />
    </StyledLabel>
  );
};

InputWithLabel.propTypes = {
  /** Input type attribute **/
  type: PropTypes.string.isRequired,
  /** Text for label component **/
  labeltext: PropTypes.string.isRequired,
  /** Extra styles for input element **/
  inputprops: PropTypes.object,
  /** Extra styles for label element **/
  labelprops: PropTypes.object,
};

InputWithLabel.defaultProps = {
  type: 'text',
  placeholder: 'Type something',
};

/** @component */
export default InputWithLabel;
