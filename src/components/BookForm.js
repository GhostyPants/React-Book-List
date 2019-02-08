import React from 'react';
import { FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';

import FormAlert from './FormAlert';

class BookForm extends React.Component {
  state = {
    title: '',
    author: '',
    isbn: '',
    isAlertShowing: false,
    alert: {
      message: '',
      alertColor: '',
    },
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (
      this.state.title === '' ||
      this.state.author === '' ||
      this.state.isbn === ''
    ) {
      const alert = {
        message: 'Please fill all inputs',
        alertColor: 'danger',
      };
      this.handleAlert(alert);
      setTimeout(
        this.setState({ isAlertShowing: !this.state.isAlertShowing }),
        1500
      );
    } else {
      const book = {
        title: this.state.title,
        author: this.state.author,
        isbn: this.state.isbn,
      };
      this.props.addBook(book);
    }
  };

  handleAlert = alert => {
    this.setState({
      alert,
      isAlertShowing: true,
    });
  };

  render() {
    return (
      <React.Fragment>
        {this.state.isAlertShowing ? (
          <FormAlert
            message={this.state.alert.message}
            alertColor={this.state.alert.alertColor}
          />
        ) : null}
        <form onSubmit={this.handleSubmit}>
          <FormGroup>
            <ControlLabel>Title:</ControlLabel>
            <FormControl
              type="text"
              name="title"
              placeholder="Book Title"
              onChange={this.handleChange}
              value={this.state.title}
            />
          </FormGroup>
          <FormGroup>
            <ControlLabel>Author:</ControlLabel>
            <FormControl
              type="text"
              name="author"
              placeholder="Book Author"
              onChange={this.handleChange}
              value={this.state.author}
            />
          </FormGroup>
          <FormGroup>
            <ControlLabel>Isbn:</ControlLabel>
            <FormControl
              type="number"
              name="isbn"
              placeholder="Book Isbn"
              onChange={this.handleChange}
              value={this.state.isbn}
            />
          </FormGroup>
          <Button bsStyle="primary" onClick={this.handleSubmit} block>
            Add Book
          </Button>
        </form>
      </React.Fragment>
    );
  }
}

export default BookForm;
