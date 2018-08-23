import React from 'react';
import styled from 'react-emotion';

import { Button as Base } from 'rebass';

const Button = ({ caca, ...oldProps }) => {
  const props = {
    caca,
    ...oldProps,
  };
  return <Base {...props} />;
};

export default styled(Base)`
  color: red;
`;
