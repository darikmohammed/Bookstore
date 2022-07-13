import React from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';
import './Styles/NewBook.css';

function NewBook() {
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.target.elements.autor.value && e.target.elements.title.value) {
      const obj = {
        Author: e.target.elements.autor.value,
        Title: e.target.elements.title.value,
        Category: 'New Category',
        progress: '1',
      };
      dispatch(addBook(obj));
      e.target.elements.autor.value = '';
      e.target.elements.title.value = '';
    }
  };
  return (
    <div className="new-book-form">
      <h2>ADD NEW BOOK</h2>
      <form action="#" className="book-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Book title"
          className="book-title"
          name="title"
        />
        <input
          type="text"
          placeholder="Book autor"
          className="book-autor"
          name="autor"
        />
        <button type="submit" className="form-btn">
          ADD BOOK
        </button>
      </form>
    </div>
  );
}

export default NewBook;
