import React from 'react';
import './Styles/NewBook.css';

function NewBook() {
  return (
    <div className="new-book-form">
      <h2>ADD NEW BOOK</h2>
      <form action="#" className="book-form">
        <input
          type="text"
          className="form-book-title"
          placeholder="Book title"
        />
        <select
          name="form-book-category"
          className="form-select"
          id="form-book-category"
        >
          <option value="Action">Action</option>
          <option value="Science-Fiction">Science Fiction</option>
          <option value="Economy">Economy</option>
        </select>
        <button type="submit" className="form-btn">
          ADD BOOK
        </button>
      </form>
    </div>
  );
}

export default NewBook;
