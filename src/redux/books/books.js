// ACTION
const ADD_BOOK = 'bookStore/books/ADD';
const REMOVE_BOOK = 'bookStore/books/REMOVE';

// REDUCER
export default (state = [], action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];

    case REMOVE_BOOK:
      return state.filter((book) => action.id !== book.id);

    default:
      return state;
  }
};
// ACTION CREATOR

export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const removeBook = (id) => ({ type: REMOVE_BOOK, id });
