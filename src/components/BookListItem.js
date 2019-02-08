import React from 'react';
import { Button } from 'react-bootstrap';

import Icon from './Icon';

const BookListItem = props => {
  return (
    <tr className="text-center">
      <td>{props.title}</td>
      <td>{props.author}</td>
      <td>{props.isbn}</td>
      <td>
        <Button
          onClick={() => props.deleteBook(props.isbn)}
          bsStyle="danger"
          bsSize="sm"
        >
          <Icon iconName="trash" color="light" />
        </Button>
      </td>
    </tr>
  );
};

export default BookListItem;
