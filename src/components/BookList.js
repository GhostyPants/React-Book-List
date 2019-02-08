import React from 'react';
import { Table } from 'react-bootstrap';

import BookListItem from './BookListItem';

export default props => {
  return (
    <Table striped className="mt-4">
      <thead>
        <tr>
          <th>Title</th>
          <th>Author</th>
          <th>ISBN</th>
          <th />
        </tr>
      </thead>
      <tbody>
        {props.books.map((book, index) => (
          <BookListItem
            key={index}
            title={book.title}
            author={book.author}
            isbn={book.isbn}
            deleteBook={props.deleteBook}
          />
        ))}
      </tbody>
    </Table>
  );
};
