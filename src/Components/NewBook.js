import React from 'react';
import Input from './Input';
import './Styles/NewBook.css';

function NewBook() {
  return (
    <div className="new-book-form">
      <h2>ADD NEW BOOK</h2>
      <form action="#" className="book-form">
        <Input placeholder="Book title" />

        <Input placeholder="Book autor" />
        <button type="submit" className="form-btn">
          ADD BOOK
        </button>
      </form>
    </div>
  );
}

export default NewBook;
