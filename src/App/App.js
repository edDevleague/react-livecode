import React, { Component } from 'react';
import styles from './App.module.css';
import { connect } from 'react-redux';
import { loadBooks } from '../actions';
import AddBook from '../containers/AddBook';
import BookList from '../containers/BookList';

class App extends Component {
  // imagine arguement called newBook
  // { title, author } ===
  // const title = newBook.title
  // const author = newBook.author
  addBook = ({ title, author }) => {
    // { title, author } === { title: title, author: author };
    const books = this.props.books.concat({ title, author });

    // { books } === { books: books }
    this.setState({ books })
  }

  render() {
    return (
      <div className={styles.App}>
        <AddBook addBook={this.addBook} />
        <BookList books={this.props.books} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    books: state.books
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadBooks: () => {
      return dispatch(loadBooks());
    }
  };
}

App = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default App;
