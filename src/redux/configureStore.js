import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'react-redux';
import books from './books/books';
import categories from './categories/categories';

const rootReducer = combineReducers({
  books,
  categories,
});

const store = configureStore({ reducer: rootReducer });
export default store;
