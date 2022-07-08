import React from 'react';
import PropTypes from 'prop-types';

function Book({ Autor, Title, Category }) {
  return (
    <div className="book-card">
      <div className="book-content">
        <div className="left-content">
          <p className="book-category">{Category}</p>
          <h2 className="book-Title">{Title}</h2>
          <p className="book-autor">{Autor}</p>
          <ul>
            <li>Comments</li>
            <li>Remove</li>
            <li>Edit</li>
          </ul>
        </div>

        <div className="right-content">
          <div className="status">64%</div>
        </div>
      </div>
    </div>
  );
}

export default Book;

Book.propTypes = {
  Autor: PropTypes.string.isRequired,
  Title: PropTypes.string.isRequired,
  Category: PropTypes.string.isRequired,
};
