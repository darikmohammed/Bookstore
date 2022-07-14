import React, { useEffect } from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { fetchBook } from '../redux/books/books';
import Nav from '../Components/Nav';
import Book from '../Components/Book';
import NewBook from '../Components/NewBook';
import './Styles/Books.css';
import { baseUrl, apiId } from '../API/BookstoreAPI';

function Books() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBook(`${baseUrl}${apiId}`));
  }, []);
  const books = useSelector((state) => state.books, shallowEqual);
  return (
    <div className="books">
      <Nav />
      {Object.keys(books).map((book) => (
        <Book
          key={book}
          bookIndex={book}
          Autor={books[book][0].author}
          Title={books[book][0].title}
          Category={books[book][0].category}
          progress={Math.floor(Math.random() * 100)}
        />
      ))}
      <div className="horizontal-line" />
      <NewBook />
    </div>
  );
}

export default Books;
