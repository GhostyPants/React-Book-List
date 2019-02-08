import React, { Component } from 'react';

import BookForm from './components/BookForm';
import Icon from './components/Icon';
import BookList from './components/BookList';

class App extends Component {
  state = {
    books: [],
  };

  componentDidMount() {
    const books =
      localStorage.getItem('reactBooks') === null
        ? []
        : JSON.parse(localStorage.getItem('reactBooks'));
    this.setState({ books });
  }

  addBook = book => {
    const books = this.state.books;
    this.setState({ books: [book, ...books] }, () => {
      localStorage.setItem('reactBooks', JSON.stringify(this.state.books));
    });
  };

  deleteBook = isbn => {
    this.setState(
      state => ({ books: state.books.filter(book => book.isbn !== isbn) }),
      () => localStorage.setItem('reactBooks', JSON.stringify(this.state.books))
    );
  };

  render() {
    return (
      <div className="container mt-3">
        <div className="text-center mb-4">
          <h1>
            <Icon iconName="book-open" color="primary" />
            My<span className="text-primary">Book</span>List
          </h1>
        </div>
        <BookForm addBook={this.addBook} />
        <BookList books={this.state.books} deleteBook={this.deleteBook} />
      </div>
    );
  }
}

export default App;
