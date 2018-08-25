import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { Image as Base } from 'rebass/emotion';

/**
 * [Rebass Image Component](http://jxnblk.com/rebass/components/Image)
 *
 * @visibleName Image
 */
const Image = ({ withshadow, withradius, ...oldProps }) => {
  const props = {
    withshadow,
    withradius,
    ...oldProps,
  };

  const Img = styled(Base)(styleProps => ({
    boxShadow: withshadow ? '0 0 1px rgba(0, 0, 0, .8)' : '',
    borderRadius: withradius ? withradius : '',
    ...styleProps,
  }));

  return <Img {...props} />;
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

// Image.displayName = 'RebassWrapperImage';

/** @component */
export default Image;
