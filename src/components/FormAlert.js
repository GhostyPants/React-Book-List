import React from 'react';
import { Alert } from 'react-bootstrap';

export default ({ message, alertColor }) => {
  return (
    <Alert bsStyle={alertColor}>
      <strong>{message}</strong>
    </Alert>
  );
};
