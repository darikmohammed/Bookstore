// ACTION
const ADD_BOOK = 'bookStore/books/ADD';
const REMOVE_BOOK = 'bookStore/books/REMOVE';
const intialState = () => [
  {
    Author: 'Suzanne Collins',
    Title: 'The Hunger Games',
    Category: 'Action',
    progress: '64',
  },
  {
    Author: 'Frank Herbert',
    Title: 'Dune',
    Category: 'Science Fiction',
    progress: '8',
  },
  {
    Author: 'Suzanne Collins',
    Title: 'Capital in the Twenty-First Century',
    Category: 'Economy',
    progress: '1',
  },
];
// REDUCER
export default (state = intialState, action) => {
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
