import React from 'react';
import WrappedModalComponent from './WrappedModalComponent';

const RoshiErrorModal = ({ message }) => (
  <WrappedModalComponent variant="error" message={message} />
);

export default RoshiErrorModal;
