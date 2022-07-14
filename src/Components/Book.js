import React from 'react';
import { useDispatch } from 'react-redux';
import { CircularProgressbar } from 'react-circular-progressbar';
import PropTypes from 'prop-types';
import { removeBook } from '../redux/books/books';
import { baseUrl, apiId } from '../API/BookstoreAPI';
import 'react-circular-progressbar/dist/styles.css';
import './Styles/Book.css';

function Book({
  Autor, Title, Category, progress, bookIndex,
}) {
  const dispacth = useDispatch();
  const handleRemove = () => {
    dispacth(removeBook(bookIndex, `${baseUrl}${apiId}`));
  };
  return (
    <div className="book-card">
      <div className="book-content">
        <div className="left-content">
          <p className="book-category">{Category}</p>
          <h2 className="book-Title">{Title}</h2>
          <p className="book-autor">{Autor}</p>
          <ul>
            <li>Comments</li>
            <li>
              <div className="line" />
            </li>
            <li>
              <button type="button" onClick={handleRemove}>
                Remove
              </button>
            </li>
            <li>
              <div className="line" />
            </li>
            <li>Edit</li>
          </ul>
        </div>
        <div className="right-content">
          <div className="progess">
            <div className="circular-progress">
              <CircularProgressbar value={progress} />
            </div>
            <div className="status">
              <p className="status-progress">
                {progress}
                %
              </p>
              <p className="status-complete">Completed</p>
            </div>
          </div>
          <div className="line2" />
          <div className="chapter">
            <p className="current">CURRENT CHAPTER</p>
            <p className="chapter-number">Chapter 17</p>
            <button className="btn-chapter" type="button">
              UPDATE PROGRESS
            </button>
          </div>
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
  progress: PropTypes.number.isRequired,
  bookIndex: PropTypes.string.isRequired,
};
