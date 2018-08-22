import React from 'react';
import styled from 'react-emotion';

import { Image as Base } from 'rebass';

const Image = ({ caca, ...oldProps }) => {
  const props = {
    caca,
    ...oldProps,
  };
  return <Base {...props} />;
};

export default styled(Base)`
  color: red;
`;
