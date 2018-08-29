import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { Image as Base } from 'rebass/emotion';

const StyledImage = styled(Base)(styleProps => {
  const { withshadow, withradius } = styleProps;

  return {
    boxShadow: withshadow ? '0 0 1px rgba(0, 0, 0, .8)' : '',
    borderRadius: withradius ? withradius : '',
    ...styleProps,
  };
});

/**
 * [Rebass Image Component](http://jxnblk.com/rebass/components/Image)
 *
 * @visibleName Image
 */
const Image = ({ newProps, ...oldProps }) => {
  const props = {
    ...newProps,
    ...oldProps,
  };

  return <StyledImage {...props} />;
};

Image.propTypes = {
  /** src attribute for image */
  src: PropTypes.string.isRequired,
  /** width attribute for image, **Rebass prop** */
  width: PropTypes.number,
  /** add box-shadow to the image */
  withshadow: PropTypes.bool,
  /** add border-radius to the image */
  borderRadius: PropTypes.string,
};

Image.defaultProps = {
  src: 'https://bit.ly/2wwKsKD',
};

/** @component */
export default Image;
