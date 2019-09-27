import React, { Component } from 'react';

import { addBook } from '../../actions';
import { connect } from 'react-redux';

class AddBook extends Component {
  constructor(props) {
    super(props);

    this.state = {
      titleInput: '',
      authorInput: '',
    };
  }

  handleTitleInput = (e) => {
    const { value } = e.target;
    this.setState({ titleInput: value });
  }

  handleAuthorInput = (e) => {
    const { value } = e.target;
    this.setState({ authorInput: value });
  }

  handleSubmitBook = () => {
    const {
      titleInput: title,
      authorInput: author
    } = this.state;
    this.props.onAdd({ title, author });
  }

  render() {
    return (
      <div>
        <div>
          <input
            type="text"
            value={this.state.titleInput}
            onChange={this.handleTitleInput}
            placeholder="Title"
        />
        </div>

        <div>
          <input
            type="text"
            value={this.state.authorInput}
            onChange={this.handleAuthorInput}
            placeholder="Author"
          />
        </div>

        <div>
          <button onClick={this.handleSubmitBook}>
            Submit book
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAdd: (book) => {
      dispatch(addBook(book));
    }
  }
};

AddBook = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddBook);

export default AddBook;