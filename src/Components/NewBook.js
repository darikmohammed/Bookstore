import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuid4 } from 'uuid';
import { addBook } from '../redux/books/books';
import { baseUrl, apiId } from '../API/BookstoreAPI';
import './Styles/NewBook.css';

function NewBook() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleAutorChange = (e) => {
    setAuthor(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.target.elements.autor.value && e.target.elements.title.value) {
      const id = uuid4();
      const obj = {
        item_id: id,
        title,
        author,
        category: 'Fiction',
      };
      dispatch(addBook(obj, `${baseUrl}${apiId}`));
      setTitle('');
      setAuthor('');
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
          value={author}
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
