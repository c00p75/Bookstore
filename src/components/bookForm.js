import React, { useState } from 'react';
import './bookStore.css';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';

const BookForm = () => {
  const dispatch = useDispatch();

  const [author, setAuthor] = useState('');
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(addBook({
      item_id: uuidv4(),
      title,
      author,
      category: 'Fiction',
    }));

    setAuthor('');
    setTitle('');
  };

  return (
    <div className="form">
      <h2 className="formTitle">ADD NEW BOOK</h2>
      <form id="bookForm" className="d-flex justify-content-between" onSubmit={(e) => handleSubmit(e)}>
        <input
          required
          type="text"
          id="titleInput"
          placeholder="Book Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          required
          type="text"
          id="authorInput"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <button type="submit" className="px-5">
          ADD BOOK
        </button>

      </form>
    </div>
  );
};

export default BookForm;
