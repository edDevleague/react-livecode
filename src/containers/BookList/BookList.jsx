import React, { Component } from 'react';
import Book from '../../components/Book';

import styles from './BookList.module.css';

class BookList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: '',
    };

    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleKeyPress(e) {
    this.setState({ searchTerm: e.target.value });
  }

  render() {
    return (
      <>
        <div>
          <input className={styles.search}
            type="text"
            value={this.state.searchTerm}
            onChange={this.handleKeyPress}
            placeholder="Search Books..."
          />
        </div>

        <ul>
          {
            this.props.books
            .filter((book) => {
              // object destructuring
              // const searchTerm = this.state.searchTerm;
              const { searchTerm } = this.state;
              return book.title.toLowerCase().includes(searchTerm.toLowerCase()) 
                  || book.author.toLowerCase().includes(searchTerm.toLowerCase());
            })
            .map((book) => {
              return (
                <Book 
                  key={book.title}
                  title={book.title}
                  author={book.author}
                />
              )
            })
          }
        </ul>
      </>
    )
  }
}

export default BookList;