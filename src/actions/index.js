// action types
export const ADD_BOOK = 'ADD_BOOK';
export const LOAD_BOOK = 'LOAD_BOOK';

// action creators 
export function addBook(payload) {
  return {
    type: ADD_BOOK,
    payload
  }
}

export function loadBooks(payload) {
  return {
    type: LOAD_BOOK,
    payload
  }
}
