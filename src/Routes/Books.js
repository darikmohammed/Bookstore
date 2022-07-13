import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import Nav from '../Components/Nav';
import Book from '../Components/Book';
import NewBook from '../Components/NewBook';
import './Styles/Books.css';

function Books() {
  const books = useSelector((state) => state.books, shallowEqual);
  return (
    <div className="books">
      <Nav />
      {books.map((book, index) => (
        <Book
          key={book.title}
          bookIndex={index}
          Autor={book.Author}
          Title={book.Title}
          Category={book.Category}
          progress={book.progress}
        />
      ))}
      <div className="horizontal-line" />
      <NewBook />
    </div>
  );
}

export default Books;
