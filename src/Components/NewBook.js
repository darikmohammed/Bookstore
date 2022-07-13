import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';
import './Styles/NewBook.css';

function NewBook() {
  const [title, setTitle] = useState('');
  const [autor, setAutor] = useState('');
  const dispatch = useDispatch();

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleAutorChange = (e) => {
    setAutor(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.target.elements.autor.value && e.target.elements.title.value) {
      const obj = {
        Author: autor,
        Title: title,
        Category: 'New Category',
        progress: '1',
      };
      dispatch(addBook(obj));
      setTitle('');
      setAutor('');
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
          value={title}
          onChange={handleTitleChange}
        />
        <input
          type="text"
          placeholder="Book autor"
          className="book-autor"
          name="autor"
          value={autor}
          onChange={handleAutorChange}
        />
        <button type="submit" className="form-btn">
          ADD BOOK
        </button>
      </form>
    </div>
  );
}

export default NewBook;
