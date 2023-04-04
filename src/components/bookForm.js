import React from 'react';
import './bookStore.css';

const BookForm = () => (
  <div className="form">
    <h2 className="formTitle">ADD NEW BOOK</h2>
    <form id="bookForm" className="d-flex justify-content-between">
      <input
        required
        type="text"
        id="titleInput"
        placeholder="Book Title"
      />

      <input
        required
        type="text"
        id="authorInput"
        placeholder="Author"
      />
      <button type="button" className="px-5">
        ADD BOOK
      </button>

    </form>
  </div>
);

export default BookForm;
