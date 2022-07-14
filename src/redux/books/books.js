import axios from 'axios';

// ACTION
const ADD_BOOK = 'bookStore/books/ADD';
const REMOVE_BOOK = 'bookStore/books/REMOVE';
const FETCH_BOOK = 'bookStore/books/FETCH';

const intialState = {};

// REDUCER
export default (state = intialState, action) => {
  switch (action.type) {
    case FETCH_BOOK:
      return action.payload;
    case ADD_BOOK:
      return {
        ...state,
        [action.payload.item_id]: [
          {
            title: action.payload.title,
            author: action.payload.author,
            category: action.payload.category,
          },
        ],
      };

    case REMOVE_BOOK:
      return [...state.slice(0, action.id), ...state.slice(action.id + 1)];

    default:
      return state;
  }
};
// ACTION CREATOR

// export const addBook = (payload) => ({
//   type: ADD_BOOK,
//   payload,
// });

// export const removeBook = (id) => ({ type: REMOVE_BOOK, id });

export const addBook = (payload, baseUrl) => (dispatch) => axios({
  method: 'POST',
  url: baseUrl,
  data: {
    ...payload,
  },
}).then((response) => {
  if (response.status === 201) {
    dispatch({ type: ADD_BOOK, payload });
  }
});

export const removeBook = (id, baseUrl) => (dispatch) => axios({
  method: 'POST',
  url: `${baseUrl}/${id}`,
}).then((response) => {
  if (response.status === 201) dispatch({ type: REMOVE_BOOK, id });
});

const fetch = (payload) => ({ type: FETCH_BOOK, payload });
export const fetchBook = (baseUrl) => (dispatch) => {
  axios.get(baseUrl).then((response) => {
    // handle success
    dispatch(fetch(response.data));
  });
};
