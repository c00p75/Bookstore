import React, { useState } from 'react';
import './bookStore.css';
import BookForm from './bookForm';
import BookList from './BookList';

const BookStore = () => {
  const [bookDetails] = useState([
    {
      title: 'The Hunger Games',
      author: 'Suzanne Collins',
      category: 'Action',
      progress: '64',
      chapter: 'Chapter 17',
      id: 1,
    },
    {
      title: 'Dune',
      author: 'Frank Herbert',
      category: 'Science Fiction',
      progress: '8',
      chapter: 'Chapter 3: "A Lesson Learned"',
      id: 2,
    },
    {
      title: 'Capital in the Twenty-First Century',
      author: 'Suzanne Collins',
      category: 'Economy',
      progress: '0',
      chapter: 'Introduction',
      id: 3,
    },
  ]);
  return (
    <div className="container bookListContainer padding">
      <BookList
        className="bookList"
        bookDetails={bookDetails}
      />
      <BookForm />
    </div>
  );
};

export default BookStore;
