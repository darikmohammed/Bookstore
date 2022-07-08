import React, { useState } from 'react';
import Nav from '../Components/Nav';
import Book from '../Components/Book';

function Books() {
  const [books] = useState([
    {
      Author: 'Suzanne Collins',
      Title: 'The Hunger Games',
      Category: 'Action',
    },
    {
      Author: 'Frank Herbert',
      Title: 'Dune',
      Category: 'Science Fiction',
    },
    {
      Author: 'Suzanne Collins',
      Title: 'Capital in the Twenty-First Century',
      Category: 'Economy',
    },
  ]);
  return (
    <div>
      <Nav />
      {books.map((book) => (
        <Book
          key={book.title}
          Autor={book.Author}
          Title={book.Title}
          Category={book.Category}
        />
      ))}
    </div>
  );
}

export default Books;
