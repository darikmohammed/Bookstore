import React, { useState } from 'react';
import Nav from '../Components/Nav';
import Book from '../Components/Book';
import NewBook from '../Components/NewBook';
import './Styles/Books.css';

function Books() {
  const [books] = useState([
    {
      Author: 'Suzanne Collins',
      Title: 'The Hunger Games',
      Category: 'Action',
      progress: '64',
    },
    {
      Author: 'Frank Herbert',
      Title: 'Dune',
      Category: 'Science Fiction',
      progress: '8',
    },
    {
      Author: 'Suzanne Collins',
      Title: 'Capital in the Twenty-First Century',
      Category: 'Economy',
      progress: '1',
    },
  ]);
  return (
    <div className="books">
      <Nav />
      {books.map((book) => (
        <Book
          key={book.title}
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
