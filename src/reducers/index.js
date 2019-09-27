import { ADD_BOOK, LOAD_BOOK } from '../actions';

const defaultState = {
  books: [
    {
      title: 'Lord of the Rings',
      author: 'J.R.R. Tolkien',
    },
    {
      title: 'Clean Code',
      author: 'Robert Martin'
    },
    {
      title: '1984',
      author: 'George Orwell'
    }
  ],
}

const reducer = (state = defaultState, action) => {
  switch(action.type) {
    case ADD_BOOK:
      const books = state.books.concat(action.payload);
      return { books };
    case LOAD_BOOK:
      return state.books;
    default:
      return state;
  }
}

export default reducer;